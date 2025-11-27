"use client";

import {
  createContext,
  useCallback,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { useToggle } from "react-use";
import SignModal, {
  type WalletSignDialogProps,
} from "@/features/Wallet/SignModal";
import useSignRemoteMessage, {
  UseSignRemoteMessageState,
} from "../useSignRemoteMessage";

export type WalletSignOptions = {
  modalProps?: Partial<WalletSignDialogProps>;
};

type WalletSignContextType = {
  signMessage: (
    options?: WalletSignOptions,
  ) => Promise<{ signature: `0x${string}`; message: string; nonce: string }>;
  abort: () => void;
} & Partial<UseSignRemoteMessageState>;

const WalletSignContext = createContext<WalletSignContextType>({
  signMessage: async () => ({ signature: "0x", message: "", nonce: "" }),
  abort: () => {},
});

export function useSignMessage() {
  return useContext(WalletSignContext);
}

export default function SignMessageProvider({ children }: PropsWithChildren) {
  const [isModalOpen, setModalOpen] = useToggle(false);
  const [doSignRemoteMessage, doAbortSignRemoteMessage, state] =
    useSignRemoteMessage();
  const [
    {
      open: modalPropsIsOpen,
      onOpenChange: modalPropsOnOpenChange,
      ...modalProps
    },
    setModalProps,
  ] = useState<Partial<WalletSignDialogProps>>({});

  const signMessage = useCallback(async (options?: WalletSignOptions) => {
    return {
      signature: `0x` as `0x${string}`,
      message: "string",
      nonce: "string",
    };
  }, []);

  const abort = useCallback(() => {
    /*
    setModalOpen(false);
    doAbortSignRemoteMessage();
*/
  }, [doAbortSignRemoteMessage, setModalOpen]);

  const value = {
    signMessage,
    abort,
    ...state,
  };

  return (
    <WalletSignContext.Provider value={value}>
      <SignModal
        open={modalPropsIsOpen || isModalOpen}
        onOpenChange={(details) => {
          modalPropsOnOpenChange?.(details);

          if (!details.open) {
            abort();
            setModalProps({});
          }
        }}
        {...modalProps}
      />

      {children}
    </WalletSignContext.Provider>
  );
}
