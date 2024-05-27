import { graphql } from "../__generated__";

export const GET_VIEWER = graphql(/* GraphQL */ `
  query Viewer {
    viewer {
      ... on Viewer {
        __typename
        id
        user {
          wallets {
            chainAddress {
              address
            }
          }
        }
      }
    }
  }
`);
