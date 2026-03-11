import { graphql } from "../__generated__";

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
