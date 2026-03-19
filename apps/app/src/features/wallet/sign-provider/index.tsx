"use client";

import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import { useToggle } from "react-use";
import SignModal, {
  type WalletSignDialogProps,
} from "@/features/wallet/sign-modal";
import useSignRemoteMessage, {
  type UseSignRemoteMessageState,
} from "../use-sign-remote-message";

export interface WalletSignOptions {
  modalProps?: Partial<WalletSignDialogProps>;
}

type WalletSignContextType = {
  signMessage: (
    options?: WalletSignOptions
  ) => Promise<{ signature: `0x${string}`; message: string; nonce: string }>;
  abort: () => void;
} & Partial<UseSignRemoteMessageState>;

const WalletSignContext = createContext<WalletSignContextType>({
  signMessage: async () => ({ signature: "0x", message: "", nonce: "" }),
  abort: () => {
    /* intentional */
  },
});

export function useSignMessage() {
  return useContext(WalletSignContext);
}

export default function SignMessageProvider({ children }: PropsWithChildren) {
  const [isModalOpen, _setModalOpen] = useToggle(false);
  const [_doSignRemoteMessage, _doAbortSignRemoteMessage, state] =
    useSignRemoteMessage();
  const [
    {
      open: modalPropsIsOpen,
      onOpenChange: modalPropsOnOpenChange,
      ...modalProps
    },
    setModalProps,
  ] = useState<Partial<WalletSignDialogProps>>({});

  const signMessage = useCallback((_options?: WalletSignOptions) => {
    return Promise.resolve({
      signature: "0x" as `0x${string}`,
      message: "string",
      nonce: "string",
    });
  }, []);

  const abort = useCallback(() => {
    /*
    setModalOpen(false);
    doAbortSignRemoteMessage();
*/
  }, []);

  const value = {
    signMessage,
    abort,
    ...state,
  };

  return (
    <WalletSignContext.Provider value={value}>
      <SignModal
        onOpenChange={(details) => {
          modalPropsOnOpenChange?.(details);

          if (!details.open) {
            abort();
            setModalProps({});
          }
        }}
        open={modalPropsIsOpen || isModalOpen}
        {...modalProps}
      />

      {children}
    </WalletSignContext.Provider>
  );
}
