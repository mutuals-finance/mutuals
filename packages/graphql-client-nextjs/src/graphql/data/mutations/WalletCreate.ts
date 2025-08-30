import { graphql } from "../__generated__";

export const WALLET_CREATE = graphql(/* GraphQL */ `
  mutation WalletCreate($input: WalletCreateInput!) {
    walletCreate(input: $input) {
      wallet {
        id
        dbid
        name
        account {
          address
        }
      }
      errors {
        field
        message
        code
      }
    }
  }
`);
