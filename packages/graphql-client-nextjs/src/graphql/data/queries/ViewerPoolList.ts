import { graphql } from "../__generated__";

export const VIEWER_POOL_LIST = graphql(/* GraphQL */ `
  query ViewerPoolList {
    viewer {
      __typename
      ... on User {
        ...UserPoolListWithOwnerAndContract
      }
      ... on ErrNotAuthorized {
        message
      }
    }
  }
`);
