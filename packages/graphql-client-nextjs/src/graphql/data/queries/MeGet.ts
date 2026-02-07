import { graphql } from "../__generated__";

export const VIEWER = graphql(/* GraphQL */ `
  query Viewer {
    viewer {
      ... on User {
        id
      }
      ... on ErrNotAuthorized {
        message
      }
    }
  }
`);
