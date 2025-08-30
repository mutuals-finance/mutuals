import { graphql } from "../__generated__";

export const POOL_CREATE = graphql(/* GraphQL */ `
  mutation PoolCreate($input: PoolCreateInput!) {
    poolCreate(input: $input) {
      pool {
        dbid
        name
        description
      }
      errors {
        field
        message
        code
      }
    }
  }
`);
