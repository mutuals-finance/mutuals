import { graphql } from "./__generated__";

// Claim Fragment
export const ClaimFragment = graphql(`
  fragment ClaimFragment on Claim {
    id
    label
    path
    validationData
    distributionData
    createdAt
    updatedAt
  }
`);

// Deposit Fragment
export const DepositFragment = graphql(`
  fragment DepositFragment on Deposit {
    id
    from
    to
    origin
    amount
    logIndex
    createdAt
    updatedAt
    token {
      ...TokenFragment
    }
  }
`);

// EVMAccount Fragment
export const EVMAccountFragment = graphql(`
  fragment EVMAccountFragment on EVMAccount {
    id
    address
    accountType
    createdAt
    updatedAt
  }
`);

// Module Fragment
export const ModuleFragment = graphql(`
  fragment ModuleFragment on Module {
    id
    address
    chainId
    moduleId
    moduleType
    permissions
    data
    name
    description
    createdAt
    updatedAt
  }
`);

// PoolContract Fragment
export const PoolContractFragment = graphql(`
  fragment PoolContractFragment on PoolContract {
    id
    address
    chainId
    status
    createdAt
    updatedAt
  }
`);

// PoolDayBalance Fragment
export const PoolDayBalanceFragment = graphql(`
  fragment PoolDayBalanceFragment on PoolDayBalance {
    id
    chainId
    date
    amount
    createdAt
    updatedAt
    token {
      ...TokenFragment
    }
  }
`);

// PoolHourBalance Fragment
export const PoolHourBalanceFragment = graphql(`
  fragment PoolHourBalanceFragment on PoolHourBalance {
    id
    chainId
    date
    amount
    createdAt
    updatedAt
    token {
      ...TokenFragment
    }
  }
`);

// PoolWithOwnerAndContract Fragment
export const PoolWithOwnerAndContract = graphql(`
  fragment PoolWithOwnerAndContract on Pool {
    id
    name
    description
    image
    slug
    status
    donationBps
    createdAt
    updatedAt
    #    owner {
    #      ... on User {
    #        id
    #      }
    #      ... on EVMAccount {
    #        id
    #        address
    #        accountType
    #        createdAt
    #        updatedAt
    #      }
    #    }
    #    contract {
    #      id
    #      address
    #      status
    #      chainId
    #      createdAt
    #      updatedAt
    #    }
  }
`);

// Token Fragment
export const TokenFragment = graphql(`
  fragment TokenFragment on Token {
    id
    address
    chainId
    tokenType
    symbol
    name
    decimals
    logo
    thumbnail
    validated
    possibleSpam
    createdAt
    updatedAt
  }
`);

// TokenBalance Fragment
export const TokenBalanceFragment = graphql(`
  fragment TokenBalanceFragment on TokenBalance {
    id
    chainId
    amount
    createdAt
    updatedAt
    token {
      ...TokenFragment
    }
  }
`);

// Tx Fragment
export const TxFragment = graphql(`
  fragment TxFragment on Tx {
    id
    gasUsed
    gasPrice
    createdAt
    updatedAt
  }
`);

// UserPoolListWithOwnerAndContract Fragment
export const UserPoolListWithOwnerAndContract = graphql(`
  fragment UserPoolListWithOwnerAndContract on User {
    pools {
      id
      name
      description
      image
      slug
      status
      donationBps
      createdAt
      updatedAt
    }
  }
`);

// Withdrawal Fragment
export const WithdrawalFragment = graphql(`
  fragment WithdrawalFragment on Withdrawal {
    id
    from
    to
    origin
    amount
    logIndex
    createdAt
    updatedAt
    token {
      ...TokenFragment
    }
  }
`);

