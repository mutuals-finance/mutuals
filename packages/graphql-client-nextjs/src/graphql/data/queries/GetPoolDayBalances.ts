import { graphql } from "../__generated__";

export const GET_POOL_DAY_BALANCES = graphql(/* GraphQL */ `
  query PoolDayBalances($id: ID, $slug: String, $contractId: ID) {
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
          dayBalance {
            ...PoolDayBalanceFragment
          }
        }
      }
    }
  }
`);
