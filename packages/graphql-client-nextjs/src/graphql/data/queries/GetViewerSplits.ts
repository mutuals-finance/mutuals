import { graphql } from "../__generated__";

export const GET_VIEWER_SPLITS = graphql(/* GraphQL */ `
  query ViewerSplits {
    viewer {
      ... on Viewer {
        viewerSplits {
          split {
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
