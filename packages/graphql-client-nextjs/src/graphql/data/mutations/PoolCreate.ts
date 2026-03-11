import { graphql } from "../__generated__";

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
          ...PoolWithOwnerAndContract
        }
      }
    }
  }
`);
