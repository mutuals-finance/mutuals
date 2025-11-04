"use client";

import WalletSelectionButton from "@/features/Wallet/SelectionButton";
import { Connector, useAccount, useConnect, useSignMessage } from "wagmi";
import coinbaseWallet from "@/assets/svg/connectors/coinbaseWallet.svg";
import metaMask from "@/assets/svg/connectors/metaMask.svg";
import walletConnect from "@/assets/svg/connectors/walletConnect.svg";
import Magic from "@/assets/svg/connectors/Magic.svg";
import { Stack, StackProps } from "@mutuals/ui";
import {
  AuthStateVerify,
  ExternalWalletInfo,
  useLoginExternalWallet,
  useSignUpOrLogIn,
  useVerifyExternalWallet,
  useWaitForLogin,
  useWaitForWalletCreation,
} from "@getpara/react-sdk";
import { useAuthState } from "@/features/Auth/StateProvider";
import { useRef } from "react";

const connectorIcons = {
  coinbaseWallet,
  metaMask,
  walletConnect,
  Magic,
};

export type MutualsConnector = Connector & { paraDetails: any; icon?: string };

function useConnectors() {
  const { connectors: _connectors, ...rest } = useConnect();

  const connectors = _connectors
    .filter((c) => c.id !== "para" && "paraDetails" in c) // Exclude Para and Injected connectors
    .map((connector) => {
      const isPara = "paraDetails" in connector;
      return {
        ...connector,
        // @ts-expect-error: paraDetails is not in the type definition
        name: isPara ? connector.paraDetails.name : connector.name,
        icon: isPara
          ? // @ts-expect-error: paraDetails is not in the type definition
            connector.paraDetails.iconUrl
          : // @ts-expect-error: we know the connector type matches a key in connectorIcons
            (connectorIcons[connector.type] ?? undefined),
      } as MutualsConnector;
    });

  return { connectors, ...rest };
}

type AuthLoginWalletProps = StackProps & {
  onSelectSignupMethod?: (url: string, chosenMethod: string) => void;
  onSelectLoginMethod?: (url: string) => void;
};

export default function AuthLoginWallet({
  onSelectSignupMethod,
  onSelectLoginMethod,
  ...props
}: AuthLoginWalletProps) {
  const popupWindow = useRef<Window | null>(null);
  const { address, isConnected } = useAccount();
  const { connectors, connectAsync } = useConnectors();
  const { signMessageAsync } = useSignMessage();
  const { loginExternalWallet } = useLoginExternalWallet();
  const { verifyExternalWallet } = useVerifyExternalWallet();
  const { waitForLogin } = useWaitForLogin();
  const { waitForWalletCreation } = useWaitForWalletCreation();
  const [authState, setAuthState] = useAuthState();
  const { signUpOrLogIn, signUpOrLogInAsync, isPending, error } =
    useSignUpOrLogIn();

  // Invoke using the `loginUrl` for basic auth users or `passkeyUrl`, `passwordUrl` or `pinUrl` for passkey/password/PIN users
  const onExternalWalletLogin = (
    uri: string,
    externalWallet: ExternalWalletInfo,
  ) => {
    console.log("Selected login method:", uri);
    //popupWindow.current = window.open(url, "ParaLogin");

    loginExternalWallet(
      {
        useShortUrls: true,
        externalWallet,
        uri,
        //isCanceled: () => Boolean(popupWindow.current?.closed),
      },
      {
        onSuccess: async (state) => {
          setAuthState(state);
          console.log("Logged in with external wallet:", { state });
        },
        onError: (error) => {
          // Handle a canceled login
        },
      },
    );
  };

  const onExternalWalletVerify = async (externalWallet: ExternalWalletInfo) => {
    //popupWindow.current = window.open(url, "ParaLogin");
    const signedMessage = await signMessageAsync({
      message: `Para verification for wallet ${externalWallet.address} at ${new Date().toISOString()}`,
    });
    verifyExternalWallet(
      {
        externalWallet,
        signedMessage,
        //isCanceled: () => Boolean(popupWindow.current?.closed),
      },
      {
        onSuccess: (state: AuthStateVerify) => {
          setAuthState(state);
          // Connect external wallet to Para
          //onExternalWalletLogin(state.loginUrl ?? "", externalWallet);

          /*switch (state.stage) {
            case "signup":
              // New user: refer to 'Sign up a new user'
              console.log("TODO; Signup user for external wallet");
              break;
            case "login":
              console.log("TODO; Login user for external wallet");
              break;
          }*/
        },
        onError: (error) => {
          // Handle a canceled wallet verification
        },
      },
    );
  };

  const onExternalWalletConnect = async (connector: MutualsConnector) => {
    const { accounts } = await connectAsync({ connector });

    if (!accounts || accounts.length === 0) {
      throw new Error("No accounts found");
    }

    const account = accounts[0];

    const externalWallet: ExternalWalletInfo = {
      address: account,
      type: "EVM",
      providerId: connector?.paraDetails.internalId,
      withFullParaAuth: true,
    };

    console.log("before loginExternalWallet", { connector, externalWallet });
    loginExternalWallet(
      { externalWallet },
      {
        onSuccess: (authState) => {
          setAuthState(authState);
          console.log("onSuccess external wallet signup or login:", {
            externalWallet,
            authState,
          });
          onExternalWalletVerify(externalWallet);
          /*switch (authState.stage) {
            case "verify":

              // Initiate polling based on what the next stage will be
              if (authState.nextStage === "signup") {
                onSelectSignupMethod?.(authState.loginUrl, "WALLET");
                // Trigger the waitForWalletCreation or waitForSignup mutations here or once the loginUrl is opened
              } else if (authState.nextStage === "login") {
                // Trigger the waitForLogin mutation here or once the loginUrl is opened
                onSelectLoginMethod?.(authState.loginUrl);
              }

              if (authState.loginUrl) {
                //onExternalWalletVerify(externalWallet);
                // Open the loginUrl in a new window or tab for basic auth users
              } else {
                // Display verification code input
              }
              break;
            case "login":
              //const { passkeyUrl, passwordUrl, pinUrl } = authState;
              // Open a login URL in a new window or tab
              // Trigger the waitForLogin mutation here or once one of the URLs are opened
              break;
          }*/
        },
        onError: (error) => {
          console.log("onError external wallet signup or login:", { error });

          // Handle error
        },
      },
    );
  };

  return (
    <Stack {...props}>
      {connectors?.map((connector, index) => (
        <WalletSelectionButton
          key={`${connector.id}-${index}`}
          onClick={() => onExternalWalletConnect(connector)}
          name={connector.name}
          image={
            connector?.icon
              ? {
                  src: connector?.icon,
                }
              : undefined
          }
        />
      ))}
    </Stack>
  );
}
