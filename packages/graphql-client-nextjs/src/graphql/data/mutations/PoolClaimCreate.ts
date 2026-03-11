import { graphql } from "../__generated__";

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
