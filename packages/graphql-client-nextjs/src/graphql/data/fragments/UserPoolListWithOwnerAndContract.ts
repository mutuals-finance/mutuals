import { graphql } from "../__generated__";

const UserPoolListWithOwnerAndContract = graphql(`
  fragment UserPoolListWithOwnerAndContract on User {
    pools {
      id
      name
      description
      image
      slug
      status
      donationBps
      createdAt
      updatedAt
    }
  }
`);
