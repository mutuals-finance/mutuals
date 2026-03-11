import { graphql } from "../__generated__";

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
