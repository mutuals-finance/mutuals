import { graphql } from "../__generated__";

export const GET_POOL_LIST_BY_RECIPIENT = graphql(/* GraphQL */ `
  query PoolListByRecipient($recipient: Bytes!) {
    pools(where: { shares_: { payee: $recipient } }) {
      id
      address
      blockNumber
      timestamp
      metaData {
        name
        description
        image
      }
      metaDataUri
      totalShares
      txCount
    }
  }
`);
