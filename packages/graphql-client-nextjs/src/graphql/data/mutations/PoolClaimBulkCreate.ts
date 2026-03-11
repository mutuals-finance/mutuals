import { graphql } from "../__generated__";

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
