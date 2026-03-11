import { graphql } from "../__generated__";

export const USER_DELETE = graphql(/* GraphQL */ `
  mutation UserDelete($token: String!) {
    userDelete(token: $token) {
      ... on ErrNotAuthorized {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on UserDeletePayload {
        user {
          id
        }
      }
    }
  }
`);
