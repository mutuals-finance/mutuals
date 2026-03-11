import { graphql } from "../__generated__";

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
