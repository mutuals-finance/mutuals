import type { Token } from "@mutuals/graphql-client-nextjs";
import {
  type RecipientInputArgs,
  type RecipientInputData,
  defaultArgs as recipientDefaultArgs,
  defaultValue as recipientDefaultData,
} from "../../components/recipient-input";
import {
  type ValueInputArgs,
  type ValueInputData,
  defaultArgs as valueDefaultArgs,
  defaultValue as valueDefaultData,
} from "../../components/value-input";
import { type Module, ModuleType } from "../../types";
import {
  batchEncodeArgs,
  batchEncodeData,
  encodeArgs,
  encodeData,
} from "./encode";
import { DirectDistributionInput } from "./input";

export type DirectDistributionData = ValueInputData & RecipientInputData;
export type DirectDistributionArgs = ValueInputArgs &
  RecipientInputArgs & { token?: Token };

export const module: Module<DirectDistributionData, DirectDistributionArgs> = {
  defaultData: {
    ...valueDefaultData,
    ...recipientDefaultData,
  },
  defaultArgs: {
    ...valueDefaultArgs,
    ...recipientDefaultArgs,
  },
  encodeData,
  batchEncodeData,
  batchEncodeArgs,
  encodeArgs,
  id: "mutuals.direct-distribution-module.1.0.0",
  name: "Direct Distribution",
  moduleType: ModuleType.Distribution,
  render: DirectDistributionInput,
};
