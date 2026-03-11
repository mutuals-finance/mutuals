import { graphql } from "../__generated__";

export const GET_USER_BY_USERNAME = graphql(/* GraphQL */ `
  query UserByUsername($username: String!) {
    userByUsername(username: $username) {
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
