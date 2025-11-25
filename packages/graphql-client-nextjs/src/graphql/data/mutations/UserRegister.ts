import { graphql } from "../__generated__";

export const USER_REGISTER = graphql(/* GraphQL */ `
  mutation UserRegister($input: UserRegisterInput!) {
    userRegister(input: $input) {
      requiresConfirmation
      user {
        id
        dbid
      }
      errors {
        field
        message
        code
      }
    }
  }
`);
