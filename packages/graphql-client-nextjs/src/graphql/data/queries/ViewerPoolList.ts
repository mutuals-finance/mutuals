import { graphql } from "../__generated__";

export const VIEWER_POOL_LIST = graphql(/* GraphQL */ `
  query ViewerPoolList {
    viewer {
      ... on Viewer {
        pools {
          id
          dbid
          status
          name
          description
          slug
          image
          createdAt
          updatedAt
        }
      }
    }
  }
`);
