import { graphql } from "../__generated__";

export const USER_REGISTER = graphql(/* GraphQL */ `
  mutation UserRegister(
    $authMechanism: AuthMechanism!
    $input: UserRegisterInput!
  ) {
    userRegister(authMechanism: $authMechanism, input: $input) {
      requiresConfirmation
      user {
        id
        dbid
        username
        isAuthenticatedUser
      }
      errors {
        field
        message
        code
      }
    }
  }
`);
