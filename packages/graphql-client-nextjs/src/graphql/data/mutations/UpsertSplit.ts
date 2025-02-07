import { graphql } from "../__generated__";

export const UPSERT_SPLIT = graphql(/* GraphQL */ `
  mutation UpsertSplit($input: UpsertSplitInput!) {
    upsertSplit(input: $input) {
      __typename
      ... on UpsertSplitPayload {
        __typename
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
      ... on ErrInvalidInput {
        __typename
      }
      ... on ErrNotAuthorized {
        __typename
      }
    }
  }
`);
