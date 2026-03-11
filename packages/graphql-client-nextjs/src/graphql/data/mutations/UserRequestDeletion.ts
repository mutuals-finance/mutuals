import { graphql } from "../__generated__";

export const USER_REQUEST_DELETION = graphql(/* GraphQL */ `
  mutation UserRequestDeletion($redirectUrl: String!) {
    userRequestDeletion(redirectUrl: $redirectUrl) {
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
