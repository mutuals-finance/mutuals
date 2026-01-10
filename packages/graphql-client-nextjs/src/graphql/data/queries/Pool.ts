import { graphql } from "../__generated__";

export const POOL = graphql(/* GraphQL */ `
  query Pool($id: DBID, $slug: String, $contractId: DBID) {
    pool(id: $id, slug: $slug, contractId: $contractId) {
      id
      dbid
      status
      name
      description
      slug
      createdAt
      updatedAt
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
