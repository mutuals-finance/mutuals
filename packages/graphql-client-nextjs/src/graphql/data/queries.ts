import { graphql } from "./__generated__";

export const GET_NODE = graphql(/* GraphQL */ `
  query Node($id: ID!) {
    node(id: $id) {
      ... on User {
        id
        roles
      }
      ... on Pool {
        ...PoolWithBalanceFragment
      }
      ... on EVMAccount {
        ...EVMAccountFragment
      }
      ... on Token {
        ...TokenFragment
      }
      ... on TokenBalance {
        ...TokenBalanceFragment
      }
      ... on PoolContract {
        ...PoolContractFragment
      }
      ... on Claim {
        ...ClaimFragment
      }
      ... on Module {
        ...ModuleFragment
      }
      ... on Deposit {
        ...DepositFragment
      }
      ... on Withdrawal {
        ...WithdrawalFragment
      }
      ... on Tx {
        ...TxFragment
      }
    }
  }
`);

export const GET_USER = graphql(/* GraphQL */ `
  query User($id: ID, $address: Address) {
    user(id: $id, address: $address) {
      ... on ErrNotAuthorized {
        message
      }
      ... on ErrUserNotFound {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on User {
        id
        roles
        pools {
          edges {
            node {
              ...PoolWithBalanceFragment
            }
            cursor
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
      }
    }
  }
`);

export const VIEWER = graphql(/* GraphQL */ `
  query Viewer {
    viewer {
      ... on ErrNotAuthorized {
        message
      }
      ... on ErrUserNotFound {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on User {
        id
        roles
        pools {
          edges {
            node {
              ...PoolWithBalanceFragment
            }
            cursor
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
      }
    }
  }
`);

export const VIEWER_POOL_LIST = graphql(/* GraphQL */ `
  query ViewerPoolList {
    viewer {
      __typename
      ... on User {
        ...UserPoolListWithOwnerAndContract
      }
      ... on ErrNotAuthorized {
        message
      }
    }
  }
`);

export const GET_POOL = graphql(/* GraphQL */ `
  query GetPool($id: ID, $slug: String, $contractId: ID) {
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
        ...PoolBaseFragment
      }
    }
  }
`);

export const GET_POOL_WITH_BALANCE = graphql(/* GraphQL */ `
  query GetPoolWithBalance($id: ID, $slug: String, $contractId: ID) {
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
        ...PoolWithBalanceFragment
      }
    }
  }
`);

export const GET_POOL_WITH_CONTRACT = graphql(/* GraphQL */ `
  query GetPoolWithContract($id: ID, $slug: String, $contractId: ID) {
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
        ...PoolWithContractFragment
      }
    }
  }
`);

export const GET_POOL_WITH_TOKENS = graphql(/* GraphQL */ `
  query GetPoolWithTokens(
    $id: ID
    $slug: String
    $contractId: ID
    $firstTokens: Int
    $afterTokens: String
  ) {
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
        ...PoolBaseFragment
        balance {
          ...PoolBalanceFragment
          tokens(first: $firstTokens, after: $afterTokens) {
            edges {
              node {
                ...TokenBalanceFragment
              }
              cursor
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
          }
        }
      }
    }
  }
`);

export const GET_POOL_WITH_CLAIMS = graphql(/* GraphQL */ `
  query GetPoolWithClaims($id: ID, $slug: String, $contractId: ID) {
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
        ...PoolWithClaimsFragment
      }
    }
  }
`);

export const GET_POOL_WITH_BALANCE_AND_CONTRACT = graphql(/* GraphQL */ `
  query GetPoolWithBalanceAndContract($id: ID, $slug: String, $contractId: ID) {
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
        ...PoolWithBalanceAndContractFragment
      }
    }
  }
`);

export const GET_POOL_WITH_BALANCE_CONTRACT_CLAIMS = graphql(/* GraphQL */ `
  query GetPoolWithBalanceContractClaims(
    $id: ID
    $slug: String
    $contractId: ID
  ) {
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
        ...PoolWithBalanceContractClaimsFragment
      }
    }
  }
`);

export const GET_POOL_DAY_BALANCES = graphql(/* GraphQL */ `
  query PoolDayBalances(
    $id: ID
    $slug: String
    $contractId: ID
    $first: Int
    $after: String
  ) {
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
          dayBalances(first: $first, after: $after) {
            edges {
              node {
                ...PoolDayBalanceFragment
              }
              cursor
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
          }
        }
      }
    }
  }
`);

export const GET_POOL_HOUR_BALANCES = graphql(/* GraphQL */ `
  query PoolHourBalances(
    $id: ID
    $slug: String
    $contractId: ID
    $first: Int
    $after: String
  ) {
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
          hourBalances(first: $first, after: $after) {
            edges {
              node {
                ...PoolHourBalanceFragment
              }
              cursor
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
          }
        }
      }
    }
  }
`);

export const GET_POOL_DEPOSITS = graphql(/* GraphQL */ `
  query PoolDeposits(
    $id: ID
    $slug: String
    $contractId: ID
    $first: Int
    $after: String
  ) {
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
          deposits(first: $first, after: $after) {
            edges {
              node {
                ...DepositFragment
                transaction {
                  ...TxFragment
                }
              }
              cursor
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
          }
        }
      }
    }
  }
`);

export const GET_POOL_WITHDRAWALS = graphql(/* GraphQL */ `
  query PoolWithdrawals(
    $id: ID
    $slug: String
    $contractId: ID
    $first: Int
    $after: String
  ) {
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
          withdrawals(first: $first, after: $after) {
            edges {
              node {
                ...WithdrawalFragment
                transaction {
                  ...TxFragment
                }
              }
              cursor
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
          }
        }
      }
    }
  }
`);

export const GET_POOL_TRANSACTIONS = graphql(/* GraphQL */ `
  query PoolTransactions(
    $id: ID
    $slug: String
    $contractId: ID
    $first: Int
    $after: String
  ) {
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
        ...PoolBaseFragment
        contract {
          id
          deposits(first: $first, after: $after) {
            edges {
              node {
                ...DepositFragment
                transaction {
                  ...TxFragment
                }
              }
              cursor
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
          }
          withdrawals(first: $first, after: $after) {
            edges {
              node {
                ...WithdrawalFragment
                transaction {
                  ...TxFragment
                }
              }
              cursor
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
          }
        }
      }
    }
  }
`);

export const SEARCH_USERS = graphql(/* GraphQL */ `
  query SearchUsers($query: String!, $limit: Int, $usernameWeight: Float) {
    searchUsers(query: $query, limit: $limit, usernameWeight: $usernameWeight) {
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on SearchUsersPayload {
        results {
          id
          roles
        }
      }
    }
  }
`);

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
          ...PoolWithBalanceFragment
        }
      }
    }
  }
`);
