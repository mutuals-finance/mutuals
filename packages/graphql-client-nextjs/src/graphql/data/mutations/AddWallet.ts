import { graphql } from "../__generated__";

export const ADD_WALLET = graphql(/* GraphQL */ `
  mutation AddWallet(
    $chainAddress: ChainAddressInput!
    $authMechanism: AuthMechanism!
  ) {
    addUserWallet(chainAddress: $chainAddress, authMechanism: $authMechanism) {
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
