"use client";

import { useCallback } from "react";
import { useSignMessage } from "wagmi";

import { useCreateNonce } from "@splitfi/sdk/client";
import { Address } from "viem";
import useAbortController, { AbortFn } from "@/hooks/useAbortController";

type SignMessageFn = () => Promise<{
  signature: Address;
  message: string;
  nonce: string;
}>;

type UseSignRemoteMessageResult = [SignMessageFn, AbortFn];

export default function useSignRemoteMessage(): UseSignRemoteMessageResult {
  const [abort, { abortController }] = useAbortController();

  const { signMessageAsync } = useSignMessage();
  const [createNonce] = useCreateNonce({
    context: {
      fetchOptions: {
        signal: abortController.current.signal,
      },
    },
  });

  const signMessage = useCallback(async () => {
    const { data, errors } = await createNonce();

    const message = data?.getAuthNonce?.message;
    const nonce = data?.getAuthNonce?.nonce;

    if ((!!errors && errors.length > 0) || !message || !nonce) {
      throw new Error("error fetching nonce");
    }

    const signature = await signMessageAsync({
      message,
    });

    return { signature, message, nonce };
  }, [createNonce, signMessageAsync]);

  return [signMessage, abort];
}
