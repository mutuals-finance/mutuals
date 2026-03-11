import { graphql } from "../__generated__";

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
