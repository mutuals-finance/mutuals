import { graphql } from "../__generated__";

export const GET_USER_BY_ID = graphql(/* GraphQL */ `
  query UserById($id: ID!) {
    userById(id: $id) {
      ... on ErrNotAuthorized {
        message
      }
      ... on ErrUserNotFound {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on User {
        id
        roles
        pools {
          ...PoolWithOwnerAndContract
        }
      }
    }
  }
`);
