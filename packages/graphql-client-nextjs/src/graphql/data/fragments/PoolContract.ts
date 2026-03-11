import { graphql } from "../__generated__";

export const PoolContractFragment = graphql(`
  fragment PoolContractFragment on PoolContract {
    id
    address
    chainId
    status
    createdAt
    updatedAt
  }
`);
