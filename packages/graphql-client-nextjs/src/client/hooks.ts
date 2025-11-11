import { useLazyQuery, useMutation } from "@apollo/client/react";
import { ApolloClient } from "@apollo/client";

import {
  Exact,
  NonceCreateMutation,
  NonceCreateMutationVariables,
  PoolCreateMutation,
  PoolCreateMutationVariables,
  TokenCreateMutationVariables,
  TokensDeactivateAllMutationVariables,
  UserByAddressQuery,
  UserByAddressQueryVariables,
  UserLoginOrRegisterMutationVariables,
  UserRegisterMutationVariables,
} from "../graphql/data/__generated__/graphql";
import { GET_USER_BY_WALLET_ADDRESS } from "../graphql/data/queries/GetUserByWalletAddress";
import { TMutationOptions } from "../types";
import { NONCE_CREATE } from "../graphql/data/mutations/NonceCreate";
import { POOL_CREATE } from "../graphql/data/mutations/PoolCreate";
import { TOKENS_DEACTIVATE_ALL } from "../graphql/data/mutations/TokensDeactivateAll";
import { TOKEN_CREATE } from "../graphql/data/mutations/TokenCreate";
import { USER_REGISTER } from "../graphql/data/mutations/UserRegister";
import { USER_LOGIN_OR_REGISTER } from "../graphql/data/mutations/UserLoginOrRegister";

export function useLazyGetUserByWalletAddress(
  options?: ApolloClient.QueryOptions<
    UserByAddressQuery,
    Exact<UserByAddressQueryVariables>
  >,
) {
  return useLazyQuery(GET_USER_BY_WALLET_ADDRESS, options);
}

/*
export function useViewerWallets(
  options?: ApolloClient.QueryOptions<
    ViewerWalletsQuery,
    Exact<ViewerWalletsQueryVariables>
  >,
) {
  return useQuery(GET_VIEWER_WALLETS, options);
}

export function useAddWallet(
  options?: TMutationOptions<AddWalletMutation, AddWalletMutationVariables>,
) {
  return useMutation(ADD_WALLET, {
    ...options,
  });
}
*/

export function useUserRegister(variables?: UserRegisterMutationVariables) {
  return useMutation(USER_REGISTER, { variables });
}

export function useUserLoginOrRegister(
  variables?: UserLoginOrRegisterMutationVariables,
) {
  return useMutation(USER_LOGIN_OR_REGISTER, { variables });
}

export function useTokenCreate(variables?: TokenCreateMutationVariables) {
  return useMutation(TOKEN_CREATE, { variables });
}

export function useTokensDeactivateAll(
  variables?: TokensDeactivateAllMutationVariables,
) {
  return useMutation(TOKENS_DEACTIVATE_ALL, { variables });
}

export function useNonceCreate(
  options?: TMutationOptions<NonceCreateMutation, NonceCreateMutationVariables>,
) {
  return useMutation(NONCE_CREATE, options);
}

export function usePoolCreate(
  options?: TMutationOptions<PoolCreateMutation, PoolCreateMutationVariables>,
) {
  return useMutation(POOL_CREATE, {
    ...options,
  });
}
