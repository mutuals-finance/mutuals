import { graphql } from "../__generated__";

export const USER_REGISTER = graphql(/* GraphQL */ `
  mutation UserRegister {
    userRegister {
      ... on ErrUserAlreadyExists {
        message
      }
      ... on ErrAuthenticationFailed {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on ErrDoesNotOwnRequiredToken {
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
