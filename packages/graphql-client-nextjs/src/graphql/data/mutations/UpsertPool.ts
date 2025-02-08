import { graphql } from "../__generated__";

export const UPSERT_SPLIT = graphql(/* GraphQL */ `
  mutation UpsertPool($input: UpsertPoolInput!) {
    upsertPool(input: $input) {
      __typename
      ... on UpsertPoolPayload {
        __typename
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
      ... on ErrInvalidInput {
        __typename
      }
      ... on ErrNotAuthorized {
        __typename
      }
    }
  }
`);
