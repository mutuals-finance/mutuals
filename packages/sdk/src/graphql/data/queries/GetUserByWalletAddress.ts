import { graphql } from "../__generated__";

export const GET_USER_BY_WALLET_ADDRESS = graphql(/* GraphQL */ `
  query UserByAddress($chainAddress: ChainAddressInput!) {
    userByAddress(chainAddress: $chainAddress) {
      __typename
      ... on SplitFiUser {
        dbid
        universal
      }
    }
  }
`);
