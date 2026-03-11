import { graphql } from "../__generated__";

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
