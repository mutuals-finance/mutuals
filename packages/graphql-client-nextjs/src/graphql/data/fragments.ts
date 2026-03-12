import { graphql } from "./__generated__";

export const QuoteFragment = graphql(`
  fragment QuoteFragment on Quote {
    currency
    value
    lastUpdatedAt
  }
`);

export const TokenFragment = graphql(`
  fragment TokenFragment on Token {
    id
    address
    network
    tokenType
    symbol
    name
    decimals
    logo
    thumbnail
    validated
    possibleSpam
    quotes {
      ...QuoteFragment
    }
    createdAt
    updatedAt
  }
`);

export const TokenBalanceFragment = graphql(`
  fragment TokenBalanceFragment on TokenBalance {
    id
    network
    amount
    formattedAmount
    quotes {
      ...QuoteFragment
    }
    createdAt
    updatedAt
    token {
      ...TokenFragment
    }
  }
`);

export const EVMAccountFragment = graphql(`
  fragment EVMAccountFragment on EVMAccount {
    id
    address
    accountType
    createdAt
    updatedAt
  }
`);

export const ModuleFragment = graphql(`
  fragment ModuleFragment on Module {
    id
    address
    network
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

export const TxFragment = graphql(`
  fragment TxFragment on Tx {
    id
    gasUsed
    gasPrice
    createdAt
    updatedAt
  }
`);

export const PoolBalanceFragment = graphql(`
  fragment PoolBalanceFragment on PoolBalance {
    totalIncome {
      ...QuoteFragment
    }
    balance {
      ...QuoteFragment
    }
    withdrawals {
      ...QuoteFragment
    }
  }
`);

export const PoolContractFragment = graphql(`
  fragment PoolContractFragment on PoolContract {
    id
    address
    network
    status
    createdAt
    updatedAt
  }
`);

export const PoolContractDetailsFragment = graphql(`
  fragment PoolContractDetailsFragment on PoolContract {
    ...PoolContractFragment
    poolFactory {
      id
      address
      network
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
`);

export const PoolBaseFragment = graphql(`
  fragment PoolBaseFragment on Pool {
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
`);

export const PoolWithBalanceFragment = graphql(`
  fragment PoolWithBalanceFragment on Pool {
    ...PoolBaseFragment
    balance {
      ...PoolBalanceFragment
    }
  }
`);

export const PoolWithContractFragment = graphql(`
  fragment PoolWithContractFragment on Pool {
    ...PoolBaseFragment
    contract {
      ...PoolContractDetailsFragment
    }
  }
`);

export const PoolWithClaimsFragment = graphql(`
  fragment PoolWithClaimsFragment on Pool {
    ...PoolBaseFragment
    claims {
      ...ClaimFragment
    }
  }
`);

export const PoolWithBalanceAndContractFragment = graphql(`
  fragment PoolWithBalanceAndContractFragment on Pool {
    ...PoolBaseFragment
    balance {
      ...PoolBalanceFragment
    }
    contract {
      ...PoolContractDetailsFragment
    }
  }
`);

export const PoolWithBalanceContractClaimsFragment = graphql(`
  fragment PoolWithBalanceContractClaimsFragment on Pool {
    ...PoolBaseFragment
    balance {
      ...PoolBalanceFragment
    }
    contract {
      ...PoolContractDetailsFragment
    }
    claims {
      ...ClaimFragment
    }
  }
`);

export const UserPoolListWithOwnerAndContract = graphql(`
  fragment UserPoolListWithOwnerAndContract on User {
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
`);

export const PoolDayBalanceFragment = graphql(`
  fragment PoolDayBalanceFragment on PoolDayBalance {
    id
    network
    date
    amount
    formattedAmount
    quotes {
      ...QuoteFragment
    }
    createdAt
    updatedAt
    token {
      ...TokenFragment
    }
  }
`);

export const PoolHourBalanceFragment = graphql(`
  fragment PoolHourBalanceFragment on PoolHourBalance {
    id
    network
    date
    amount
    formattedAmount
    quotes {
      ...QuoteFragment
    }
    createdAt
    updatedAt
    token {
      ...TokenFragment
    }
  }
`);
