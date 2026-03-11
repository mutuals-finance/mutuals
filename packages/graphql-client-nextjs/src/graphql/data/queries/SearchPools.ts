import { graphql } from "../__generated__";

export const SEARCH_POOLS = graphql(/* GraphQL */ `
  query SearchPools(
    $query: String!
    $limit: Int
    $nameWeight: Float
    $descriptionWeight: Float
  ) {
    searchPools(
      query: $query
      limit: $limit
      nameWeight: $nameWeight
      descriptionWeight: $descriptionWeight
    ) {
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on SearchPoolsPayload {
        results {
          pool {
            ...PoolWithOwnerAndContract
          }
        }
      }
    }
  }
`);
