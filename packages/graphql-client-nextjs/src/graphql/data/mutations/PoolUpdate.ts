import { graphql } from "../__generated__";

export const POOL_UPDATE = graphql(/* GraphQL */ `
  mutation PoolUpdate($id: ID!, $input: PoolUpdateInput!) {
    poolUpdate(id: $id, input: $input) {
      ... on ErrNotAuthorized {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on ErrPoolNotFound {
        message
      }
      ... on PoolUpdatePayload {
        pool {
          ...PoolWithOwnerAndContract
        }
      }
    }
  }
`);
