import { graphql } from "./__generated__";

// Pool Claim Bulk Create Mutation
export const POOL_CLAIM_BULK_CREATE = graphql(/* GraphQL */ `
  mutation PoolClaimBulkCreate(
    $poolId: ID!
    $claims: [ClaimBulkCreateInput!]!
    $errorPolicy: ErrorPolicyEnum
  ) {
    poolClaimBulkCreate(
      poolId: $poolId
      claims: $claims
      errorPolicy: $errorPolicy
    ) {
      ... on ErrNotAuthorized {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on ErrPoolNotFound {
        message
      }
      ... on ClaimBulkCreatePayload {
        count
        claims {
          ...ClaimFragment
        }
      }
    }
  }
`);

// Pool Claim Bulk Delete Mutation
export const POOL_CLAIM_BULK_DELETE = graphql(/* GraphQL */ `
  mutation PoolClaimBulkDelete($poolId: ID!, $claimIds: [ID!]!) {
    poolClaimBulkDelete(poolId: $poolId, claimIds: $claimIds) {
      ... on ErrNotAuthorized {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on ErrPoolNotFound {
        message
      }
      ... on ClaimBulkDeletePayload {
        count
      }
    }
  }
`);

// Pool Claim Bulk Update Mutation
export const POOL_CLAIM_BULK_UPDATE = graphql(/* GraphQL */ `
  mutation PoolClaimBulkUpdate(
    $poolId: ID!
    $claims: [ClaimBulkUpdateInput!]!
    $errorPolicy: ErrorPolicyEnum
  ) {
    poolClaimBulkUpdate(
      poolId: $poolId
      claims: $claims
      errorPolicy: $errorPolicy
    ) {
      ... on ErrNotAuthorized {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on ErrPoolNotFound {
        message
      }
      ... on ClaimBulkUpdatePayload {
        count
        claims {
          ...ClaimFragment
        }
      }
    }
  }
`);

// Pool Claim Create Mutation
export const POOL_CLAIM_CREATE = graphql(/* GraphQL */ `
  mutation PoolClaimCreate($poolId: ID!, $input: ClaimCreateInput!) {
    poolClaimCreate(poolId: $poolId, input: $input) {
      ... on ErrNotAuthorized {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on ErrPoolNotFound {
        message
      }
      ... on ClaimCreatePayload {
        claim {
          ...ClaimFragment
        }
      }
    }
  }
`);

// Pool Claim Delete Mutation
export const POOL_CLAIM_DELETE = graphql(/* GraphQL */ `
  mutation PoolClaimDelete($poolId: ID!, $claimId: ID!) {
    poolClaimDelete(poolId: $poolId, claimId: $claimId) {
      ... on ErrNotAuthorized {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on ErrPoolNotFound {
        message
      }
      ... on ClaimDeletePayload {
        claim {
          id
        }
      }
    }
  }
`);

// Pool Claim Update Mutation
export const POOL_CLAIM_UPDATE = graphql(/* GraphQL */ `
  mutation PoolClaimUpdate($poolId: ID!, $input: ClaimUpdateInput!) {
    poolClaimUpdate(poolId: $poolId, input: $input) {
      ... on ErrNotAuthorized {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on ErrPoolNotFound {
        message
      }
      ... on ClaimUpdatePayload {
        claim {
          ...ClaimFragment
        }
      }
    }
  }
`);

// Pool Create Mutation
export const POOL_CREATE = graphql(/* GraphQL */ `
  mutation PoolCreate($input: PoolCreateInput!) {
    poolCreate(input: $input) {
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on ErrNotAuthorized {
        message
      }
      ... on PoolCreatePayload {
        pool {
          ...PoolWithBalanceAndContractFragment
        }
      }
    }
  }
`);

// Pool Delete Mutation
export const POOL_DELETE = graphql(/* GraphQL */ `
  mutation PoolDelete($id: ID!) {
    poolDelete(id: $id) {
      ... on ErrNotAuthorized {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on ErrPoolNotFound {
        message
      }
      ... on PoolDeletePayload {
        pool {
          id
        }
      }
    }
  }
`);

// Pool Update Mutation
export const POOL_UPDATE = graphql(/* GraphQL */ `
  mutation PoolUpdate($id: ID!, $input: PoolUpdateInput!) {
    poolUpdate(id: $id, input: $input) {
      ... on ErrNotAuthorized {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on ErrPoolNotFound {
        message
      }
      ... on PoolUpdatePayload {
        pool {
          ...PoolWithBalanceAndContractFragment
        }
      }
    }
  }
`);

// Role Update Mutation
export const ROLE_UPDATE = graphql(/* GraphQL */ `
  mutation RoleUpdate($role: Role!, $input: RoleUpdateInput!) {
    roleUpdate(role: $role, input: $input) {
      ... on ErrNotAuthorized {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on RoleUpdatePayload {
        user {
          id
          roles
        }
      }
    }
  }
`);

// User Delete Mutation
export const USER_DELETE = graphql(/* GraphQL */ `
  mutation UserDelete($token: String!) {
    userDelete(token: $token) {
      ... on ErrNotAuthorized {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on UserDeletePayload {
        user {
          id
        }
      }
    }
  }
`);

// User Register Mutation
export const USER_REGISTER = graphql(/* GraphQL */ `
  mutation UserRegister {
    userRegister {
      ... on ErrUserAlreadyExists {
        message
      }
      ... on ErrAuthenticationFailed {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on ErrDoesNotOwnRequiredToken {
        message
      }
      ... on UserRegisterPayload {
        user {
          id
        }
        requiresConfirmation
      }
    }
  }
`);

// User Request Deletion Mutation
export const USER_REQUEST_DELETION = graphql(/* GraphQL */ `
  mutation UserRequestDeletion($redirectUrl: String!) {
    userRequestDeletion(redirectUrl: $redirectUrl) {
      ... on ErrNotAuthorized {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on UserDeletePayload {
        user {
          id
        }
      }
    }
  }
`);

// User Update Mutation
export const USER_UPDATE = graphql(/* GraphQL */ `
  mutation UserUpdate($input: UserUpdateInput!) {
    userUpdate(input: $input) {
      ... on ErrNotAuthorized {
        message
      }
      ... on ErrUsernameNotAvailable {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on UserUpdatePayload {
        user {
          id
        }
      }
    }
  }
`);
