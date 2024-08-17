import { graphql } from "../__generated__";

export const LOGIN = graphql(/* GraphQL */ `
  mutation Login($mechanism: AuthMechanism!) {
    login(authMechanism: $mechanism) {
      __typename

      ... on LoginPayload {
        viewer {
          user {
            dbid
          }
        }
      }
      ... on ErrUserNotFound {
        message
      }
      ... on ErrAuthenticationFailed {
        message
      }
      ... on ErrDoesNotOwnRequiredToken {
        message
      }
    }
  }
`);
