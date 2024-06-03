"use client";

import React, {
  createContext,
  useCallback,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { useToggle } from "react-use";
import SignModal, { type SignMessageModalProps } from "./Modal";
import useSignRemoteMessage, {
  SignMessageResult,
  UseSignRemoteMessageState,
} from "./useSignRemoteMessage";

export type SignMessageOptions = {
  modalProps?: Partial<SignMessageModalProps>;
};

type SignMessageContextType = {
  signMessage: (options?: SignMessageOptions) => SignMessageResult;
  abort: () => void;
} & Partial<UseSignRemoteMessageState>;

const SignMessageContext = createContext<SignMessageContextType>({
  signMessage: async () => ({ signature: "0x", message: "", nonce: "" }),
  abort: () => {},
});

export function useSignMessage() {
  return useContext(SignMessageContext);
}

export default function SignMessageProvider({ children }: PropsWithChildren) {
  const [isModalOpen, setModalOpen] = useToggle(false);
  const [doSignRemoteMessage, doAbortSignRemoteMessage, state] =
    useSignRemoteMessage();
  const [
    { isOpen: modalPropsIsOpen, onClose: modalPropsOnClose, ...modalProps },
    setModalProps,
  ] = useState<Partial<SignMessageModalProps>>({});

  const signMessage = useCallback(
    async (options?: SignMessageOptions) => {
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
    <SignMessageContext.Provider value={value}>
      <SignModal
        isOpen={modalPropsIsOpen || isModalOpen}
        onClose={() => {
          abort();
          modalPropsOnClose?.();
          setModalProps({});
        }}
        {...modalProps}
      ></SignModal>

      {children}
    </SignMessageContext.Provider>
  );
}
