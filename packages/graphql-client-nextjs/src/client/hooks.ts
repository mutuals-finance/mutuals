import { useMutation } from "@apollo/client/react";
import {
  PoolCreateMutation,
  PoolCreateMutationVariables,
  UserRegisterMutationVariables,
} from "../graphql/data/__generated__/graphql";
import { TMutationOptions } from "../types";
import { POOL_CREATE } from "../graphql/data/mutations/PoolCreate";
import { USER_REGISTER } from "../graphql/data/mutations/UserRegister";

export function useUserRegister(variables?: UserRegisterMutationVariables) {
  return useMutation(USER_REGISTER, { variables });
}

export function usePoolCreate(
  options?: TMutationOptions<PoolCreateMutation, PoolCreateMutationVariables>,
) {
  return useMutation(POOL_CREATE, {
    ...options,
  });
}
