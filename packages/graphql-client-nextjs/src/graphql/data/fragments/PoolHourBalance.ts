import { graphql } from "../__generated__";

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
