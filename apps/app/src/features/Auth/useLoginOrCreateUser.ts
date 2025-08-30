"use client";

import { useCallback } from "react";

import { AuthMechanism } from "@mutuals/graphql-client-nextjs";
import {
  useLazyGetUserByWalletAddress,
  useTokenCreate,
  useUserRegister,
} from "@mutuals/graphql-client-nextjs/client";
import type { Address } from "viem";
import useAbortController, { AbortFn } from "@/hooks/useAbortController";

type LoginOrCreateUserFn = (
  address: Address,
  authMechanism: AuthMechanism,
) => Promise<void>;

export default function useAuthLoginOrCreateUser() {
  const [abort, { abortController }] = useAbortController();

  const [getUserByWalletAddress] = useLazyGetUserByWalletAddress();
  const [login] = useTokenCreate();
  const [createUser] = useUserRegister();

  const loginOrCreateUser = useCallback(
    async (address: Address, authMechanism: AuthMechanism) => {
      const context = {
        fetchOptions: {
          signal: abortController.current.signal,
        },
      };

      const { data, error } = await getUserByWalletAddress({
        context,
        variables: {
          chainAddress: {
            chainId: 1,
            address: address,
          },
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      const userExists = data?.userByAddress?.__typename == "User";

      if (userExists) {
        const { errors, data } = await login({
          context,
          variables: {
            audience: "mutuals",
            authMechanism,
          },
        });

        if (errors && errors.length > 0) {
          throw new Error("error adding wallet");
        }
      } else {
        const { errors } = await createUser({
          context,
          variables: {
            authMechanism,
            input: {},
          },
        });

        if (errors && errors.length > 0) {
          throw new Error("error creating user");
        }
      }
    },
    [getUserByWalletAddress, createUser, login, abortController],
  );

  return [loginOrCreateUser, abort] as [LoginOrCreateUserFn, AbortFn];
}
