import { graphql } from "../__generated__";

export const POOL = graphql(/* GraphQL */ `
  query Pool($id: ID, $slug: String, $contractId: ID) {
    pool(id: $id, slug: $slug, contractId: $contractId) {
      ... on ErrPoolNotFound {
        message
      }
      ... on ErrInvalidInput {
        message
      }
      ... on Error {
        message
      }
      ... on Pool {
        ...PoolWithOwnerAndContract
      }
    }
  }
`);

/*
owner {
... on User {
    dbid
  }
... on EVMAccount {
    address
    accountType
  }
}
*/
