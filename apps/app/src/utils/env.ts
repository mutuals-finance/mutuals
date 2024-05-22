import { NODE_ENV } from "src/constants";

export function isDev() {
  return NODE_ENV !== "production";
}
