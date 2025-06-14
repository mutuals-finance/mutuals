import { graphql } from "../__generated__";

export const GET_POOL_BY_ID = graphql(/* GraphQL */ `
  query PoolById($id: DBID!) {
    poolById(id: $id) {
      ... on Pool {
        id
        dbid
        version
        status
        name
        description
        address
        ownerAddress
        creatorAddress
        chain
      }
    }
  }
`);
