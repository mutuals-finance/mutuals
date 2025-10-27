"use client";

import { useCallback } from "react";
import type { Address } from "viem";
import { AuthMechanism } from "@mutuals/graphql-client-nextjs";
import { useUserLoginOrRegister } from "@mutuals/graphql-client-nextjs/client";
import useAbortController, { AbortFn } from "@/hooks/useAbortController";

type LoginOrRegisterUserFn = (
  address: Address,
  authMechanism: AuthMechanism,
) => Promise<void>;

export default function useAuthLoginOrRegisterUser() {
  const [abort, { abortController }] = useAbortController();
  const [loginOrRegisterUserFn] = useUserLoginOrRegister();

  const loginOrRegisterUser = useCallback(
    async (authMechanism: AuthMechanism) => {
      const context = {
        fetchOptions: {
          signal: abortController.current.signal,
        },
      };

      const { errors } = await loginOrRegisterUserFn({
        context,
        variables: {
          authMechanism,
          input: {},
        },
      });

      if (errors && errors.length > 0) {
        throw new Error("error login or registering user");
      }
    },
    [abortController, loginOrRegisterUserFn],
  );

  return [loginOrRegisterUser, abort] as [LoginOrRegisterUserFn, AbortFn];
}
