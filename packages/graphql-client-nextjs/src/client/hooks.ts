import { QueryHookOptions, useLazyQuery, useMutation } from "@apollo/client";
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
  UserRegisterMutationVariables,
} from "../graphql/data/__generated__/graphql";
import { GET_USER_BY_WALLET_ADDRESS } from "../graphql/data/queries/GetUserByWalletAddress";
import { TMutationOptions } from "../types";
import { NONCE_CREATE } from "../graphql/data/mutations/NonceCreate";
import { POOL_CREATE } from "../graphql/data/mutations/PoolCreate";
import { TOKENS_DEACTIVATE_ALL } from "../graphql/data/mutations/TokensDeactivateAll";
import { TOKEN_CREATE } from "../graphql/data/mutations/TokenCreate";
import { USER_REGISTER } from "../graphql/data/mutations/UserRegister";

export function useLazyGetUserByWalletAddress(
  options?: QueryHookOptions<
    UserByAddressQuery,
    Exact<UserByAddressQueryVariables>
  >,
) {
  return useLazyQuery(GET_USER_BY_WALLET_ADDRESS, options);
}

/*
export function useViewerWallets(
  options?: QueryHookOptions<
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
