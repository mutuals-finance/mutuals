import { graphql } from "../__generated__";

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
