import {
  QueryHookOptions,
  useLazyQuery,
  useMutation,
  useQuery,
} from "@apollo/client";
import { LOGIN } from "../graphql/data/mutations/Login";
import {
  AddWalletMutation,
  AddWalletMutationVariables,
  CreateNonceMutation,
  CreateNonceMutationVariables,
  CreateUserMutationVariables,
  Exact,
  LoginMutationVariables,
  LogoutMutationVariables,
  UpsertPoolMutation,
  UpsertPoolMutationVariables,
  UserByAddressQuery,
  UserByAddressQueryVariables,
  ViewerWalletsQuery,
  ViewerWalletsQueryVariables,
} from "../graphql/data/__generated__/graphql";
import { CREATE_NONCE } from "../graphql/data/mutations/CreateNonce";
import { GET_USER_BY_WALLET_ADDRESS } from "../graphql/data/queries/GetUserByWalletAddress";
import { CREATE_USER } from "../graphql/data/mutations/CreateUser";
import { ADD_WALLET } from "../graphql/data/mutations/AddWallet";
import { LOGOUT } from "../graphql/data/mutations/Logout";
import { GET_VIEWER_WALLETS } from "../graphql/data/queries/GetViewerWallets";
import { TMutationOptions } from "../types";
import { UPSERT_SPLIT } from "../graphql/data/mutations/UpsertPool";

export function useLazyGetUserByWalletAddress(
  options?: QueryHookOptions<
    UserByAddressQuery,
    Exact<UserByAddressQueryVariables>
  >,
) {
  return useLazyQuery(GET_USER_BY_WALLET_ADDRESS, options);
}

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

export function useCreateUser(variables?: CreateUserMutationVariables) {
  return useMutation(CREATE_USER, { variables });
}

export function useLogin(variables?: LoginMutationVariables) {
  return useMutation(LOGIN, { variables });
}

export function useLogout(variables?: LogoutMutationVariables) {
  return useMutation(LOGOUT, { variables });
}

export function useCreateNonce(
  options?: TMutationOptions<CreateNonceMutation, CreateNonceMutationVariables>,
) {
  return useMutation(CREATE_NONCE, options);
}

export function useUpsertPool(
  options?: TMutationOptions<UpsertPoolMutation, UpsertPoolMutationVariables>,
) {
  return useMutation(UPSERT_SPLIT, {
    ...options,
  });
}
