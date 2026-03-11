import { graphql } from "../__generated__";

export const TokenFragment = graphql(`
  fragment TokenFragment on Token {
    id
    address
    chainId
    tokenType
    symbol
    name
    decimals
    logo
    thumbnail
    validated
    possibleSpam
    createdAt
    updatedAt
  }
`);
