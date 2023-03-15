import { graphql } from "./__generated__/gql";

export const tokenFragment = graphql(/* GraphQL */ `
  fragment TokenFragment on Token {
    id
    symbol
    name
    decimals
    totalSupply
  }
`);

export const tokenValueFragment = graphql(/* GraphQL */ `
  fragment TokenValueFragment on TokenValue {
    amount
    token {
      ...TokenFragment
    }
  }
`);

export const shareFragment = graphql(/* GraphQL */ `
  fragment ShareFragment on Share {
    id
    payee
    timestamp
    value
  }
`);

export const transactionBaseFragment = graphql(/* GraphQL */ `
  fragment TransactionBaseFragment on Transaction {
    id
    split {
      ...SplitBaseFragment
    }
    blockNumber
    timestamp
    gasUsed
    gasPrice
  }
`);

export const transactionDetailsFragment = graphql(/* GraphQL */ `
  fragment TransactionDetailsFragment on Transaction {
    id
    split {
      ...SplitBaseFragment
    }
    blockNumber
    timestamp
    gasUsed
    gasPrice
    withdrawals {
      ...WithdrawalFragment
    }
    deposits {
      ...DepositFragment
    }
    contractURIUpdates {
      ...ContractURIUpdateFragment
    }
  }
`);

export const withdrawalFragment = graphql(/* GraphQL */ `
  fragment WithdrawalFragment on Withdrawal {
    amount
    token {
      ...TokenFragment
    }
    id
    transaction {
      ...TransactionBaseFragment
    }
    split {
      ...SplitBaseFragment
    }
    origin
    logIndex
    to
  }
`);

export const depositFragment = graphql(/* GraphQL */ `
  fragment DepositFragment on Deposit {
    amount
    token {
      ...TokenFragment
    }
    id
    transaction {
      ...TransactionBaseFragment
    }
    split {
      ...SplitBaseFragment
    }
    origin
    logIndex
    from
  }
`);

export const contractURIUpdateFragment = graphql(/* GraphQL */ `
  fragment ContractURIUpdateFragment on ContractURIUpdate {
    id
    transaction {
      ...TransactionBaseFragment
    }
    split {
      ...SplitBaseFragment
    }
    origin
    logIndex
    previousURI
    newURI
  }
`);

export const splitBaseFragment = graphql(/* GraphQL */ `
  fragment SplitBaseFragment on Split {
    id
    address
    blockNumber
    timestamp
    metaData {
      name
      description
      image
    }
    metaDataUri
    totalShares
    txCount
  }
`);

export const splitDetailsFragment = graphql(/* GraphQL */ `
  fragment SplitDetailsFragment on Split {
    id
    address
    blockNumber
    timestamp
    metaData {
      name
      description
      image
    }
    metaDataUri
    totalShares
    txCount
    shares {
      ...ShareFragment
    }
    tokenWithdrawals {
      amount
      token {
        ...TokenFragment
      }
    }
    tokenDeposits {
      amount
      token {
        ...TokenFragment
      }
    }
    withdrawableTokens {
      amount
      token {
        ...TokenFragment
      }
    }
  }
`);
