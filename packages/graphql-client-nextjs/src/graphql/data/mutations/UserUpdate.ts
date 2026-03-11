import { graphql } from "../__generated__";

export const USER_UPDATE = graphql(/* GraphQL */ `
  mutation UserUpdate($input: UserUpdateInput!) {
    userUpdate(input: $input) {
      ... on ErrNotAuthorized {
        message
      }
      ... on ErrUsernameNotAvailable {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on UserUpdatePayload {
        user {
          id
        }
      }
    }
  }
`);
