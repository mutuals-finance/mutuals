import { graphql } from "../__generated__";

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
