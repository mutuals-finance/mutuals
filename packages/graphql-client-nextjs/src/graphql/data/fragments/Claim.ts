import { graphql } from "../__generated__";

export const ClaimFragment = graphql(`
  fragment ClaimFragment on Claim {
    id
    label
    path
    validationData
    distributionData
    createdAt
    updatedAt
  }
`);
