import { graphql } from "../__generated__";

export const GET_POOL_DETAILS_BY_ID = graphql(/* GraphQL */ `
  query PoolDetailsById($id: ID!) {
    split(id: $id) {
      id
      address
      blockNumber
      timestamp
      metaDataUri
      totalShares
      txCount
      metaData {
        name
        description
        image
      }
      shares {
        id
        payee
        timestamp
        value
        blockNumber
      }
    }
  }
`);
