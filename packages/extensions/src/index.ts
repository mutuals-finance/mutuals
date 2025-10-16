import StateExtensionsList from "./state";
import StrategyExtensionsList from "./strategy";
import { Collection } from "./utils";
import { Extension } from "./types";

const StrategyExtensions = Collection.fromList<Extension>(
  StrategyExtensionsList,
);

const StateExtensions = Collection.fromList<Extension>(StateExtensionsList);

export { StrategyExtensions, StateExtensions };
