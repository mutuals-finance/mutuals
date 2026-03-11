import * as Direct from "./direct";
import * as Priority from "./priority";
import * as Vesting from "./vesting";
import * as TokenLimit from "./token-limit";
import * as Remainder from "./remainder";

export default [
  Direct.module,
  Priority.module,
  Vesting.module,
  TokenLimit.module,
  Remainder.module,
];
