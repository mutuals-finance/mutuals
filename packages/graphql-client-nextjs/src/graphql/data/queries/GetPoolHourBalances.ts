import { graphql } from "../__generated__";

export const GET_POOL_HOUR_BALANCES = graphql(/* GraphQL */ `
  query PoolHourBalances($id: ID, $slug: String, $contractId: ID) {
    pool(id: $id, slug: $slug, contractId: $contractId) {
      ... on ErrPoolNotFound {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on Pool {
        id
        contract {
          id
          hourBalance {
            ...PoolHourBalanceFragment
          }
        }
      }
    }
  }
`);
