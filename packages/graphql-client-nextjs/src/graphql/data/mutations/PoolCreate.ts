import { graphql } from "../__generated__";

export const POOL_CREATE = graphql(/* GraphQL */ `
  mutation PoolCreate($input: PoolCreateInput!) {
    poolCreate(input: $input) {
      ... on ErrInvalidInput {
        message
      }
      ... on ErrNotAuthorized {
        message
      }
      ... on Error {
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
