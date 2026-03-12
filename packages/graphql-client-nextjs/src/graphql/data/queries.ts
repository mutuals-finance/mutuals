import { graphql } from "./__generated__";

// Node Query
export const GET_NODE = graphql(/* GraphQL */ `
  query Node($id: ID!) {
    node(id: $id) {
      ... on User {
        id
        roles
      }
      ... on Pool {
        ...PoolWithOwnerAndContract
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

// Pool Day Balances Query
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

// Pool Deposits Query
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

// Pool Hour Balances Query
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

// Pool Transactions Query
export const GET_POOL_TRANSACTIONS = graphql(/* GraphQL */ `
  query PoolTransactions($id: ID, $slug: String, $contractId: ID) {
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
          withdrawals {
            ...WithdrawalFragment
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

// Pool With Contract Details Query
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

// Pool Withdrawals Query
export const GET_POOL_WITHDRAWALS = graphql(/* GraphQL */ `
  query PoolWithdrawals($id: ID, $slug: String, $contractId: ID) {
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
          withdrawals {
            ...WithdrawalFragment
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

// User By ID Query
export const GET_USER_BY_ID = graphql(/* GraphQL */ `
  query UserById($id: ID!) {
    userById(id: $id) {
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
          ...PoolWithOwnerAndContract
        }
      }
    }
  }
`);

// User By Username Query
export const GET_USER_BY_USERNAME = graphql(/* GraphQL */ `
  query UserByUsername($username: String!) {
    userByUsername(username: $username) {
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
          ...PoolWithOwnerAndContract
        }
      }
    }
  }
`);

// User By Wallet Address Query
export const GET_USER_BY_WALLET_ADDRESS = graphql(/* GraphQL */ `
  query UserByAddress($address: Address!) {
    userByAddress(address: $address) {
      __typename
      ... on ErrNotAuthorized {
        __typename
        message
      }
      ... on ErrUserNotFound {
        __typename
        message
      }
      ... on ErrInvalidInput {
        __typename
        message
        parameters
        reasons
      }
      ... on User {
        id
      }
    }
  }
`);

// Viewer Query
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
          ...PoolWithOwnerAndContract
        }
      }
    }
  }
`);

// Pool Query
export const POOL = graphql(/* GraphQL */ `
  query Pool($id: ID, $slug: String, $contractId: ID) {
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
        ...PoolWithOwnerAndContract
      }
    }
  }
`);

// Search Pools Query
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

// Search Users Query
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
          user {
            id
          }
        }
      }
    }
  }
`);

// Viewer Pool List Query
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

