import StateExtensionsList from "./state";
import StrategyExtensionsList from "./strategy";
import { Collection } from "./utils";
const StrategyExtensions = Collection.fromList(StrategyExtensionsList);
const StateExtensions = Collection.fromList(StateExtensionsList);
export { StrategyExtensions, StateExtensions };
