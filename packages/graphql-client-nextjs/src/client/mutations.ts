import { useMutation } from "@apollo/client/react";
import {
  PoolCreateMutation,
  PoolCreateMutationVariables,
  PoolUpdateMutation,
  PoolUpdateMutationVariables,
  PoolDeleteMutation,
  PoolDeleteMutationVariables,
  UserUpdateMutation,
  UserUpdateMutationVariables,
  UserRequestDeletionMutation,
  UserRequestDeletionMutationVariables,
  UserDeleteMutation,
  UserDeleteMutationVariables,
  RoleUpdateMutation,
  RoleUpdateMutationVariables,
  PoolClaimCreateMutation,
  PoolClaimCreateMutationVariables,
  PoolClaimUpdateMutation,
  PoolClaimUpdateMutationVariables,
  PoolClaimDeleteMutation,
  PoolClaimDeleteMutationVariables,
  PoolClaimBulkCreateMutation,
  PoolClaimBulkCreateMutationVariables,
  PoolClaimBulkUpdateMutation,
  PoolClaimBulkUpdateMutationVariables,
  PoolClaimBulkDeleteMutation,
  PoolClaimBulkDeleteMutationVariables,
} from "../graphql/data/__generated__/graphql";
import { TMutationOptions } from "../types";
import { POOL_CREATE } from "../graphql/data/mutations/PoolCreate";
import { POOL_UPDATE } from "../graphql/data/mutations/PoolUpdate";
import { POOL_DELETE } from "../graphql/data/mutations/PoolDelete";
import { USER_REGISTER } from "../graphql/data/mutations/UserRegister";
import { USER_UPDATE } from "../graphql/data/mutations/UserUpdate";
import { USER_REQUEST_DELETION } from "../graphql/data/mutations/UserRequestDeletion";
import { USER_DELETE } from "../graphql/data/mutations/UserDelete";
import { ROLE_UPDATE } from "../graphql/data/mutations/RoleUpdate";
import { POOL_CLAIM_CREATE } from "../graphql/data/mutations/PoolClaimCreate";
import { POOL_CLAIM_UPDATE } from "../graphql/data/mutations/PoolClaimUpdate";
import { POOL_CLAIM_DELETE } from "../graphql/data/mutations/PoolClaimDelete";
import { POOL_CLAIM_BULK_CREATE } from "../graphql/data/mutations/PoolClaimBulkCreate";
import { POOL_CLAIM_BULK_UPDATE } from "../graphql/data/mutations/PoolClaimBulkUpdate";
import { POOL_CLAIM_BULK_DELETE } from "../graphql/data/mutations/PoolClaimBulkDelete";

// User Mutations
export function useUserRegister() {
  return useMutation(USER_REGISTER);
}

export function useUserUpdate(
  options?: TMutationOptions<UserUpdateMutation, UserUpdateMutationVariables>,
) {
  return useMutation(USER_UPDATE, options);
}

export function useUserRequestDeletion(
  options?: TMutationOptions<
    UserRequestDeletionMutation,
    UserRequestDeletionMutationVariables
  >,
) {
  return useMutation(USER_REQUEST_DELETION, options);
}

export function useUserDelete(
  options?: TMutationOptions<UserDeleteMutation, UserDeleteMutationVariables>,
) {
  return useMutation(USER_DELETE, options);
}

// Pool Mutations
export function usePoolCreate(
  options?: TMutationOptions<PoolCreateMutation, PoolCreateMutationVariables>,
) {
  return useMutation(POOL_CREATE, options);
}

export function usePoolUpdate(
  options?: TMutationOptions<PoolUpdateMutation, PoolUpdateMutationVariables>,
) {
  return useMutation(POOL_UPDATE, options);
}

export function usePoolDelete(
  options?: TMutationOptions<PoolDeleteMutation, PoolDeleteMutationVariables>,
) {
  return useMutation(POOL_DELETE, options);
}

// Claim Mutations
export function usePoolClaimCreate(
  options?: TMutationOptions<
    PoolClaimCreateMutation,
    PoolClaimCreateMutationVariables
  >,
) {
  return useMutation(POOL_CLAIM_CREATE, options);
}

export function usePoolClaimUpdate(
  options?: TMutationOptions<
    PoolClaimUpdateMutation,
    PoolClaimUpdateMutationVariables
  >,
) {
  return useMutation(POOL_CLAIM_UPDATE, options);
}

export function usePoolClaimDelete(
  options?: TMutationOptions<
    PoolClaimDeleteMutation,
    PoolClaimDeleteMutationVariables
  >,
) {
  return useMutation(POOL_CLAIM_DELETE, options);
}

export function usePoolClaimBulkCreate(
  options?: TMutationOptions<
    PoolClaimBulkCreateMutation,
    PoolClaimBulkCreateMutationVariables
  >,
) {
  return useMutation(POOL_CLAIM_BULK_CREATE, options);
}

export function usePoolClaimBulkUpdate(
  options?: TMutationOptions<
    PoolClaimBulkUpdateMutation,
    PoolClaimBulkUpdateMutationVariables
  >,
) {
  return useMutation(POOL_CLAIM_BULK_UPDATE, options);
}

export function usePoolClaimBulkDelete(
  options?: TMutationOptions<
    PoolClaimBulkDeleteMutation,
    PoolClaimBulkDeleteMutationVariables
  >,
) {
  return useMutation(POOL_CLAIM_BULK_DELETE, options);
}

export function useRoleUpdate(
  options?: TMutationOptions<RoleUpdateMutation, RoleUpdateMutationVariables>,
) {
  return useMutation(ROLE_UPDATE, options);
}
