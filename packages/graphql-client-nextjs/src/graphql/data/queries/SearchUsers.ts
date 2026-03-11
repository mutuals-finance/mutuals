import { graphql } from "../__generated__";

export const SEARCH_USERS = graphql(/* GraphQL */ `
  query SearchUsers($query: String!, $limit: Int, $usernameWeight: Float) {
    searchUsers(query: $query, limit: $limit, usernameWeight: $usernameWeight) {
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on SearchUsersPayload {
        results {
          user {
            id
          }
        }
      }
    }
  }
`);
