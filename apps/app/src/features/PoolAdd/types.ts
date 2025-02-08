import { FieldArrayWithId } from "react-hook-form";
import { Address } from "viem";
import { UpsertPoolInput } from "@mutuals/graphql-client-nextjs";

export type PoolAddData = {
  image: any;
  ownerAddress: Address;
} & UpsertPoolInput;

export type AllocationItemRecipientOrGroupBaseProps = FieldArrayWithId<
  PoolAddData,
  "allocations",
  "id"
>;
