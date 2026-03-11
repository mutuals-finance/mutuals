import { graphql } from "../__generated__";

export const GET_POOL_WITH_CONTRACT_DETAILS = graphql(/* GraphQL */ `
  query PoolWithContractDetails($id: ID, $slug: String, $contractId: ID) {
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
        name
        description
        image
        slug
        status
        donationBps
        createdAt
        updatedAt
        contract {
          ...PoolContractFragment
          poolFactory {
            id
            address
            chainId
            poolCount
            createdAt
            updatedAt
          }
          account {
            id
            address
            accountType
            createdAt
            updatedAt
          }
          owner {
            id
            address
            accountType
            createdAt
            updatedAt
          }
        }
        claims {
          ...ClaimFragment
        }
      }
    }
  }
`);
