import { graphql } from './__generated__/gql';

export const SPLITS_BY_PAYEE = graphql(/* GraphQL */ `
  query SplitsByPayee($payee: Bytes = "") {
    splits(where: { shares_: { payee: $payee } }) {
      ...SplitBaseFragment
    }
  }
`);

export const SPLIT = graphql(/* GraphQL */ `
  query Split($id: ID!) {
    split(id: $id) {
      ...SplitDetailsFragment
    }
  }
`);

export const POOL = graphql(/* GraphQL */ `
  query Pool($id: ID!) {
    split(id: $id) {
      ...SplitBaseFragment
    }
  }
`);

export const TRANSACTIONS_BY_SPLIT = graphql(/* GraphQL */ `
  query TransactionsBySplit($split: String!) {
    transactions(where: { split: $split }) {
      ...TransactionDetailsFragment
    }
  }
`);

export const SHARES_BY_POOL = graphql(/* GraphQL */ `
  query SharesByPool($pool: String!) {
    shares(where: { split: $pool }) {
      ...ShareFragment
    }
  }
`);
