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
  type WalletSignModalProps,
} from "@/features/Wallet/SignModal";
import useSignRemoteMessage, {
  SignMessageResult,
  UseSignRemoteMessageState,
} from "../useSignRemoteMessage";

export type WalletSignOptions = {
  modalProps?: Partial<WalletSignModalProps>;
};

type WalletSignContextType = {
  signMessage: (options?: WalletSignOptions) => SignMessageResult;
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
    { isOpen: modalPropsIsOpen, onClose: modalPropsOnClose, ...modalProps },
    setModalProps,
  ] = useState<Partial<WalletSignModalProps>>({});

  const signMessage = useCallback(
    async (options?: WalletSignOptions) => {
      if (options?.modalProps) {
        setModalProps(options.modalProps);
      }
      setModalOpen(true);
      const result = await doSignRemoteMessage();
      setModalOpen(false);
      return result;
    },
    [doSignRemoteMessage, setModalOpen],
  );

  const abort = useCallback(() => {
    setModalOpen(false);
    doAbortSignRemoteMessage();
  }, [doSignRemoteMessage, setModalOpen]);

  const value = {
    signMessage,
    abort,
    ...state,
  };

  return (
    <WalletSignContext.Provider value={value}>
      <SignModal
        isOpen={modalPropsIsOpen || isModalOpen}
        onClose={() => {
          abort();
          modalPropsOnClose?.();
          setModalProps({});
        }}
        {...modalProps}
      />

      {children}
    </WalletSignContext.Provider>
  );
}
