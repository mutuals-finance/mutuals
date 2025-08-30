import { graphql } from "../__generated__";

export const TOKENS_DEACTIVATE_ALL = graphql(/* GraphQL */ `
  mutation TokensDeactivateAll {
    tokensDeactivateAll {
      errors {
        field
        message
        code
      }
    }
  }
`);
