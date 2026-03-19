import DistributionModulesList from "./distribution";
import type { Module } from "./types";
import { Collection } from "./utils";
import ValidationModulesList from "./validation";

const DistributionModules = Collection.fromList<Module>(
  DistributionModulesList
);

const ValidationModules = Collection.fromList<Module>(ValidationModulesList);

export { DistributionModules, ValidationModules };
