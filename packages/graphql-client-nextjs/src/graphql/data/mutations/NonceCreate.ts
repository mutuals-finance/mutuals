import { graphql } from "../__generated__";

export const NONCE_CREATE = graphql(/* GraphQL */ `
  mutation NonceCreate {
    nonce {
      nonce
      message
    }
  }
`);
