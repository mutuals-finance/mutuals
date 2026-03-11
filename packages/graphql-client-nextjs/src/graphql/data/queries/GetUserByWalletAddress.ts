import { graphql } from "../__generated__";

export const GET_USER_BY_WALLET_ADDRESS = graphql(/* GraphQL */ `
  query UserByAddress($address: Address!) {
    userByAddress(address: $address) {
      __typename
      ... on ErrNotAuthorized {
        __typename
        message
      }
      ... on ErrUserNotFound {
        __typename
        message
      }
      ... on ErrInvalidInput {
        __typename
        message
        parameters
        reasons
      }
      ... on User {
        id
      }
    }
  }
`);
