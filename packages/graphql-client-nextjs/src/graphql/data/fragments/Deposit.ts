import { graphql } from "../__generated__";

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
