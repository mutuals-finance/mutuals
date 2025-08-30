import { graphql } from "../__generated__";

export const ME_GET = graphql(/* GraphQL */ `
  query Me {
    viewer {
      ... on Error {
        __typename
        message
      }
      ... on Viewer {
        email {
          email
          verificationStatus
        }
        user {
          username
          dbid
        }
      }
    }
  }
`);
