import { graphql } from "../__generated__";

export const TxFragment = graphql(`
  fragment TxFragment on Tx {
    id
    gasUsed
    gasPrice
    createdAt
    updatedAt
  }
`);
