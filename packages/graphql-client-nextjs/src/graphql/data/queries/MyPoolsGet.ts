import { graphql } from "../__generated__";

export const MY_POOLS_GET = graphql(/* GraphQL */ `
  query MyPools {
    viewer {
      ... on Viewer {
        pools {
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
              dbid
            }
            ... on EVMAccount {
              address
              accountType
            }
          }
        }
      }
    }
  }
`);
