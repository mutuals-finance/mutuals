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
    paymentReleases {
      ...PaymentReleaseFragment
    }
    paymentReceives {
      ...PaymentReceiveFragment
    }
    contractURIUpdates {
      ...ContractURIUpdateFragment
    }
  }
`);

export const paymentReleaseFragment = graphql(/* GraphQL */ `
  fragment PaymentReleaseFragment on PaymentRelease {
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

export const paymentReceiveFragment = graphql(/* GraphQL */ `
  fragment PaymentReceiveFragment on PaymentReceive {
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
    releasedTokens {
      amount
      token {
        ...TokenFragment
      }
    }
    receivedTokens {
      amount
      token {
        ...TokenFragment
      }
    }
    releasableTokens {
      amount
      token {
        ...TokenFragment
      }
    }
  }
`);
