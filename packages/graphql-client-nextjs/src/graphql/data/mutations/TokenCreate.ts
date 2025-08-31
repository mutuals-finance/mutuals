import { graphql } from "../__generated__";

export const TOKEN_CREATE = graphql(/* GraphQL */ `
  mutation TokenCreate($audience: String!, $authMechanism: AuthMechanism!) {
    tokenCreate(audience: $audience, authMechanism: $authMechanism) {
      token
      refreshToken
      user {
        id
        dbid
        username
      }
      errors {
        field
        message
        code
      }
    }
  }
`);
