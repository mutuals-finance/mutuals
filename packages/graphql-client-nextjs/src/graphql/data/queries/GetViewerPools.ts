import { graphql } from "../__generated__";

export const GET_VIEWER_POOLS = graphql(/* GraphQL */ `
  query ViewerPools {
    viewer {
      ... on Viewer {
        viewerPools {
          pool {
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
    }
  }
`);
