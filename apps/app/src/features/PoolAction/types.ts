import { Balance } from "@ankr.com/ankr.js/dist/types";

export type WithdrawData = {
  assets?: Balance[];
  distribute: boolean;
};
