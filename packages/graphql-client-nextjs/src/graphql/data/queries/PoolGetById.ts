import { graphql } from "../__generated__";

export const POOL_GET_BY_ID = graphql(/* GraphQL */ `
  query PoolGetById($id: DBID!) {
    poolById(id: $id) {
      ... on Pool {
        id
        dbid
        status
        name
        description
        slug
        createdAt
        updatedAt
        owner {
          ... on User {
            username
            dbid
          }
          ... on EVMAccount {
            address
            accountType
          }
        }
      }
      ... on ErrPoolNotFound {
        message
      }
    }
  }
`);
