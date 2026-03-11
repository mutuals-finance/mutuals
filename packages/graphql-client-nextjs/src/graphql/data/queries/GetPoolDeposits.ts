import { graphql } from "../__generated__";

export const GET_POOL_DEPOSITS = graphql(/* GraphQL */ `
  query PoolDeposits($id: ID, $slug: String, $contractId: ID) {
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
          deposits {
            ...DepositFragment
            transaction {
              id
              gasUsed
              gasPrice
              createdAt
              updatedAt
            }
          }
        }
      }
    }
  }
`);
