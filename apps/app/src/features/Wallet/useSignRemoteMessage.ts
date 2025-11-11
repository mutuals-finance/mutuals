"use client";

import { useCallback } from "react";
import { useSignMessage, UseSignMessageReturnType } from "wagmi";

import { useNonceCreate } from "@mutuals/graphql-client-nextjs/client";
import { Address } from "viem";
import useAbortController, { AbortFn } from "@/hooks/useAbortController";

export type SignMessageResult = Promise<{
  signature: Address;
  message: string;
  nonce: string;
}>;

export type UseSignRemoteMessageState = Omit<
  UseSignMessageReturnType,
  "signMessageAsync" | "signMessage"
>;

export type UseSignRemoteMessageResult = [
  () => SignMessageResult,
  AbortFn,
  UseSignRemoteMessageState,
];

export default function useSignRemoteMessage(): UseSignRemoteMessageResult {
  const [abort, { abortController }] = useAbortController();

  const { signMessageAsync, signMessage: _, ...state } = useSignMessage();
  const [createNonce] = useNonceCreate({
    context: {
      fetchOptions: {
        signal: abortController.current.signal,
      },
    },
  });

  const signMessage = useCallback(async () => {
    const { data, error } = await createNonce();

    const message = data?.nonce?.message;
    const nonce = data?.nonce?.nonce;

    if (!!error || !message || !nonce) {
      throw new Error("error fetching nonce");
    }

    const signature = await signMessageAsync({
      message,
    });

    return { signature, message, nonce };
  }, [createNonce, signMessageAsync]);

  return [signMessage, abort, state];
}
