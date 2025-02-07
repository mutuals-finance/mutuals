import { FieldArrayWithId } from "react-hook-form";
import { Address } from "viem";
import { UpsertSplitInput } from "@mutuals/graphql-client-nextjs";

export type PoolAddData = {
  image: any;
  ownerAddress: Address;
} & UpsertSplitInput;

export type AllocationItemRecipientOrGroupBaseProps = FieldArrayWithId<
  PoolAddData,
  "allocations",
  "id"
>;
