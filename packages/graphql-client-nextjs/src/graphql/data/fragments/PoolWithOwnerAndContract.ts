import { graphql } from "../__generated__";

const PoolWithOwnerAndContract = graphql(`
  fragment PoolWithOwnerAndContract on Pool {
    id
    name
    description
    image
    slug
    status
    donationBps
    createdAt
    updatedAt
    #    owner {
    #      ... on User {
    #        id
    #      }
    #      ... on EVMAccount {
    #        id
    #        address
    #        accountType
    #        createdAt
    #        updatedAt
    #      }
    #    }
    #    contract {
    #      id
    #      address
    #      status
    #      chainId
    #      createdAt
    #      updatedAt
    #    }
  }
`);
