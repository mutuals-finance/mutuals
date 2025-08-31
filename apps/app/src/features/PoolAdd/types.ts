import { FieldArrayWithId } from "react-hook-form";
import { Address } from "viem";
import { PoolCreateInput } from "@mutuals/graphql-client-nextjs";

export type PoolAddData = {
  image: any;
  ownerAddress: Address;
} & PoolCreateInput;

export type AllocationItemRecipientOrGroupBaseProps = FieldArrayWithId<
  PoolAddData,
  "allocations",
  "id"
>;
