import { graphql } from "../__generated__";

export const GET_VIEWER = graphql(/* GraphQL */ `
  query Viewer {
    viewer {
      ... on Viewer {
        __typename
      }
      ... on ErrNotAuthorized {
        message
        cause {
          ... on ErrNoCookie {
            message
          }
          ... on ErrInvalidToken {
            message
          }
          ... on ErrSessionInvalidated {
            message
          }
          ... on ErrDoesNotOwnRequiredToken {
            message
          }
        }
      }
    }
  }
`);
