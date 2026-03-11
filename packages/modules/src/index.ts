import ValidationModulesList from "./validation";
import DistributionModulesList from "./distribution";
import { Collection } from "./utils";
import { Module } from "./types";

const DistributionModules = Collection.fromList<Module>(
  DistributionModulesList,
);

const ValidationModules = Collection.fromList<Module>(ValidationModulesList);

export { DistributionModules, ValidationModules };
