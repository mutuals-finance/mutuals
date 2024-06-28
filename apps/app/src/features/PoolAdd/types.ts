import { FileWithPreview } from "@/components/Form/types";

export type PoolAddPayee = {
  id: string;
  value: string;
};

export type PoolAddData = {
  image: FileWithPreview;
  name: string;
  description: string;
  metadataLocked: boolean;
  payees: PoolAddPayee[];
};
