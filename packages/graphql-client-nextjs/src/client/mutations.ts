import { useMutation } from "@apollo/client/react";
import {
  POOL_CLAIM_BULK_CREATE,
  POOL_CLAIM_BULK_DELETE,
  POOL_CLAIM_BULK_UPDATE,
  POOL_CLAIM_CREATE,
  POOL_CLAIM_DELETE,
  POOL_CLAIM_UPDATE,
  POOL_CREATE,
  POOL_DELETE,
  POOL_UPDATE,
  ROLE_UPDATE,
  USER_DELETE,
  USER_REGISTER,
  USER_REQUEST_DELETION,
  USER_UPDATE,
} from "../graphql/data";
import type {
  PoolClaimBulkCreateMutation,
  PoolClaimBulkCreateMutationVariables,
  PoolClaimBulkDeleteMutation,
  PoolClaimBulkDeleteMutationVariables,
  PoolClaimBulkUpdateMutation,
  PoolClaimBulkUpdateMutationVariables,
  PoolClaimCreateMutation,
  PoolClaimCreateMutationVariables,
  PoolClaimDeleteMutation,
  PoolClaimDeleteMutationVariables,
  PoolClaimUpdateMutation,
  PoolClaimUpdateMutationVariables,
  PoolCreateMutation,
  PoolCreateMutationVariables,
  PoolDeleteMutation,
  PoolDeleteMutationVariables,
  PoolUpdateMutation,
  PoolUpdateMutationVariables,
  RoleUpdateMutation,
  RoleUpdateMutationVariables,
  UserDeleteMutation,
  UserDeleteMutationVariables,
  UserRequestDeletionMutation,
  UserRequestDeletionMutationVariables,
  UserUpdateMutation,
  UserUpdateMutationVariables,
} from "../graphql/data/__generated__/graphql";
import type { TMutationOptions } from "../types";

// User Mutations
export function useUserRegister() {
  return useMutation(USER_REGISTER);
}

export function useUserUpdate(
  options?: TMutationOptions<UserUpdateMutation, UserUpdateMutationVariables>
) {
  return useMutation(USER_UPDATE, options);
}

export function useUserRequestDeletion(
  options?: TMutationOptions<
    UserRequestDeletionMutation,
    UserRequestDeletionMutationVariables
  >
) {
  return useMutation(USER_REQUEST_DELETION, options);
}

export function useUserDelete(
  options?: TMutationOptions<UserDeleteMutation, UserDeleteMutationVariables>
) {
  return useMutation(USER_DELETE, options);
}

// Pool Mutations
export function usePoolCreate(
  options?: TMutationOptions<PoolCreateMutation, PoolCreateMutationVariables>
) {
  return useMutation(POOL_CREATE, options);
}

export function usePoolUpdate(
  options?: TMutationOptions<PoolUpdateMutation, PoolUpdateMutationVariables>
) {
  return useMutation(POOL_UPDATE, options);
}

export function usePoolDelete(
  options?: TMutationOptions<PoolDeleteMutation, PoolDeleteMutationVariables>
) {
  return useMutation(POOL_DELETE, options);
}

// Claim Mutations
export function usePoolClaimCreate(
  options?: TMutationOptions<
    PoolClaimCreateMutation,
    PoolClaimCreateMutationVariables
  >
) {
  return useMutation(POOL_CLAIM_CREATE, options);
}

export function usePoolClaimUpdate(
  options?: TMutationOptions<
    PoolClaimUpdateMutation,
    PoolClaimUpdateMutationVariables
  >
) {
  return useMutation(POOL_CLAIM_UPDATE, options);
}

export function usePoolClaimDelete(
  options?: TMutationOptions<
    PoolClaimDeleteMutation,
    PoolClaimDeleteMutationVariables
  >
) {
  return useMutation(POOL_CLAIM_DELETE, options);
}

export function usePoolClaimBulkCreate(
  options?: TMutationOptions<
    PoolClaimBulkCreateMutation,
    PoolClaimBulkCreateMutationVariables
  >
) {
  return useMutation(POOL_CLAIM_BULK_CREATE, options);
}

export function usePoolClaimBulkUpdate(
  options?: TMutationOptions<
    PoolClaimBulkUpdateMutation,
    PoolClaimBulkUpdateMutationVariables
  >
) {
  return useMutation(POOL_CLAIM_BULK_UPDATE, options);
}

export function usePoolClaimBulkDelete(
  options?: TMutationOptions<
    PoolClaimBulkDeleteMutation,
    PoolClaimBulkDeleteMutationVariables
  >
) {
  return useMutation(POOL_CLAIM_BULK_DELETE, options);
}

export function useRoleUpdate(
  options?: TMutationOptions<RoleUpdateMutation, RoleUpdateMutationVariables>
) {
  return useMutation(ROLE_UPDATE, options);
}
