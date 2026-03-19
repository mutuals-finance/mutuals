"use client";

import { useCallback } from "react";
import { type UseSignMessageReturnType, useSignMessage } from "wagmi";

import useAbortController, { type AbortFn } from "@/hooks/use-abort-controller";

export type SignMessageResult = Promise<void>;

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
  const [abort] = useAbortController();

  const { signMessageAsync: _s, signMessage: _m, ...state } = useSignMessage();

  const signMessage = useCallback(async () => {
    /* intentional */
  }, []);

  return [signMessage, abort, state];
}
