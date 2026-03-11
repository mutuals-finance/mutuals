import StateModulesList from "./state";
import StrategyModulesList from "./strategy";
import { Collection } from "./utils";
const StrategyModules = Collection.fromList(StrategyModulesList);
const StateModules = Collection.fromList(StateModulesList);
export { StrategyModules, StateModules };
