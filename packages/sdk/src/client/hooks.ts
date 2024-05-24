import {
  MutationHookOptions,
  OperationVariables,
  QueryHookOptions,
  QueryOptions,
  useLazyQuery,
  useMutation,
} from "@apollo/client";
import { LOGIN } from "../graphql/data/mutations/Login";
import {
  AddWalletMutationVariables,
  CreateNonceMutation,
  CreateNonceMutationVariables,
  CreateUserMutationVariables,
  Exact,
  LoginMutationVariables,
  UserByAddressQuery,
  UserByAddressQueryVariables,
} from "../graphql/data/__generated__/graphql";
import { CREATE_NONCE } from "../graphql/data/mutations/CreateNonce";
import { GET_USER_BY_WALLET_ADDRESS } from "../graphql/data/queries/GetUserByWalletAddress";
import { CREATE_USER } from "../graphql/data/mutations/CreateUser";
import { ADD_WALLET } from "../graphql/data/mutations/AddWallet";

type TMutationOptions<TMutationDocument> = MutationHookOptions<
  TMutationDocument,
  Exact<{ [key: string]: never }>
>;

export function useLazyGetUserByWalletAddress(
  options?: QueryHookOptions<
    UserByAddressQuery,
    Exact<UserByAddressQueryVariables>
  >,
) {
  return useLazyQuery(GET_USER_BY_WALLET_ADDRESS, {
    ...options,
  });
}

export function useAddWallet(variables?: AddWalletMutationVariables) {
  return useMutation(ADD_WALLET, { variables });
}

export function useCreateUser(variables?: CreateUserMutationVariables) {
  return useMutation(CREATE_USER, { variables });
}

export function useLogin(variables?: LoginMutationVariables) {
  return useMutation(LOGIN, { variables });
}

export function useCreateNonce(
  options?: TMutationOptions<CreateNonceMutation>,
) {
  return useMutation(CREATE_NONCE, options);
}
