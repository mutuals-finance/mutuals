"use client";

import { useCallback } from "react";

import { AuthMechanism, Chain } from "@splitfi/sdk";
import {
  useCreateUser,
  useLazyGetUserByWalletAddress,
  useLogin,
} from "@splitfi/sdk/client";
import type { Address } from "viem";
import useAbortController, { AbortFn } from "@/hooks/useAbortController";

type LoginOrCreateUserFn = (
  address: Address,
  authMechanism: AuthMechanism,
) => Promise<void>;

export default function useAuthLoginOrCreateUser() {
  const [abort, { abortController }] = useAbortController();

  const [getUserByWalletAddress] = useLazyGetUserByWalletAddress();
  const [login] = useLogin();
  const [createUser] = useCreateUser();

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
            chain: Chain.Ethereum,
            address: address,
          },
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      const userExists = data?.userByAddress?.__typename == "SplitFiUser";

      if (userExists) {
        const { errors, data } = await login({
          context,
          variables: {
            mechanism: authMechanism,
          },
        });

        if (errors && errors.length > 0) {
          throw new Error("error adding wallet");
        }

        if (data?.login && "message" in data.login) {
          throw new Error(data.login.message);
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
