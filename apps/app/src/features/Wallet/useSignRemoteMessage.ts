"use client";

import { useCallback } from "react";
import { useSignMessage, UseSignMessageReturnType } from "wagmi";

import useAbortController, { AbortFn } from "@/hooks/useAbortController";

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
  const [abort, { abortController }] = useAbortController();

  const { signMessageAsync: _s, signMessage: _m, ...state } = useSignMessage();

  const signMessage = useCallback(async () => {}, []);

  return [signMessage, abort, state];
}
