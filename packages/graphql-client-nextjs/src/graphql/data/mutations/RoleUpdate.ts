import { graphql } from "../__generated__";

export const ROLE_UPDATE = graphql(/* GraphQL */ `
  mutation RoleUpdate($role: Role!, $input: RoleUpdateInput!) {
    roleUpdate(role: $role, input: $input) {
      ... on ErrNotAuthorized {
        message
      }
      ... on ErrInvalidInput {
        message
        parameters
        reasons
      }
      ... on RoleUpdatePayload {
        user {
          id
          roles
        }
      }
    }
  }
`);
