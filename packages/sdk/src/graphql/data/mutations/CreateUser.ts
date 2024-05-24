import { graphql } from "../__generated__";

export const CREATE_USER = graphql(/* GraphQL */ `
  mutation CreateUser(
    $authMechanism: AuthMechanism!
    $input: CreateUserInput!
  ) {
    createUser(authMechanism: $authMechanism, input: $input) {
      __typename
      ... on CreateUserPayload {
        __typename
        viewer {
          ... on Viewer {
            user {
              username
            }
          }
        }
      }
      ... on ErrAuthenticationFailed {
        __typename
      }
      ... on ErrDoesNotOwnRequiredToken {
        __typename
      }
      ... on ErrUserAlreadyExists {
        __typename
      }
      ... on ErrUsernameNotAvailable {
        __typename
      }
      ... on ErrInvalidInput {
        __typename
      }
    }
  }
`);
