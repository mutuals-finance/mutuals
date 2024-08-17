import { graphql } from "../__generated__";

export const CREATE_NONCE = graphql(/* GraphQL */ `
  mutation CreateNonce {
    getAuthNonce {
      __typename

      ... on AuthNonce {
        nonce # @required(action: THROW)
        message # @required(action: THROW)
      }
    }
  }
`);
