import { FieldArrayWithId } from "react-hook-form";
import { Address } from "viem";
import { PoolCreateInput } from "@mutuals/graphql-client-nextjs";
import { AllocationAddData } from "@/features/Allocation/types";

export type PoolAddData = {
  image: any;
  ownerAddress: Address;
} & Omit<PoolCreateInput, "addClaims"> & { claims: AllocationAddData };

export type AllocationItemRecipientOrGroupBaseProps = FieldArrayWithId<
  PoolAddData,
  "allocations",
  "id"
>;
