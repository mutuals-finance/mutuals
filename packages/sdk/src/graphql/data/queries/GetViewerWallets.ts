import { graphql } from "../__generated__";

export const GET_VIEWER_WALLETS = graphql(/* GraphQL */ `
  query ViewerWallets {
    viewer {
      ... on Viewer {
        user {
          wallets {
            dbid
            chainAddress {
              chain
              address
            }
          }
          primaryWallet {
            dbid
            chainAddress {
              chain
              address
            }
          }
        }
      }
    }
  }
`);
