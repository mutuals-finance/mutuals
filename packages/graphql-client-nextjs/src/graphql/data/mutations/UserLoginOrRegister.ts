import { graphql } from "../__generated__";

export const USER_LOGIN_OR_REGISTER = graphql(/* GraphQL */ `
  mutation UserLoginOrRegister(
    $authMechanism: AuthMechanism!
    $input: UserLoginOrRegisterInput!
  ) {
    userLoginOrRegister(authMechanism: $authMechanism, input: $input) {
      requiresConfirmation
      token
      refreshToken
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
