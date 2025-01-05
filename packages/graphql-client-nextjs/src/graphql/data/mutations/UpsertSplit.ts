import { graphql } from "../__generated__";

export const UPSERT_SPLIT = graphql(/* GraphQL */ `
  mutation UpsertSplit(
    $chainAddress: ChainAddressInput!
    $authMechanism: AuthMechanism!
  ) {
    upsertSplit(chainAddress: $chainAddress, authMechanism: $authMechanism) {
      ... on AddUserWalletPayload {
        __typename
        viewer {
          user {
            primaryWallet {
              __typename
            }
            wallets {
              dbid
              chainAddress {
                address
                chain
              }
            }
          }
        }
      }
    }
  }
`);
