import { graphql } from "../__generated__";

export const ModuleFragment = graphql(`
  fragment ModuleFragment on Module {
    id
    address
    chainId
    moduleId
    moduleType
    permissions
    data
    name
    description
    createdAt
    updatedAt
  }
`);
