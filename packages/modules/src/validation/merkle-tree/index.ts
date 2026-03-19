import type { JsonObject } from "@mutuals/ui";
import type { Module } from "../../types";

export type MerkleTreeValidationData = JsonObject;

export const defaultValue: MerkleTreeValidationData = {};

export const module: Module = {
  id: "merkle_tree_validation",
  name: "Merkle Tree Validation",
  moduleType: "Validation",
  render: null,
};
