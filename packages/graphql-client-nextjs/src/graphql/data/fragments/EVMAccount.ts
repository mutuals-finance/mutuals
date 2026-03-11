import { graphql } from "../__generated__";

export const EVMAccountFragment = graphql(`
  fragment EVMAccountFragment on EVMAccount {
    id
    address
    accountType
    createdAt
    updatedAt
  }
`);
