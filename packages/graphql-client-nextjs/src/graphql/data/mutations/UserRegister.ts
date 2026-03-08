import { graphql } from "../__generated__";

export const USER_REGISTER = graphql(/* GraphQL */ `
  mutation UserRegister($input: UserRegisterInput!) {
    userRegister(input: $input) {
      ... on ErrUserAlreadyExists {
        message
      }
      ... on ErrAuthenticationFailed {
        message
      }
      ... on ErrInvalidInput {
        message
      }
      ... on Error {
        message
      }
      ... on UserRegisterPayload {
        user {
          id
        }
        requiresConfirmation
      }
    }
  }
`);
