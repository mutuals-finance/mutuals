import { graphql } from "../__generated__";

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
