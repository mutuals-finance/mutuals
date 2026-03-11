import { graphql } from "../__generated__";

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
