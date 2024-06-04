import { FileWithPreview } from "@/components/Form/types";
import { Payee } from "@/features/PoolAdd/Payees";

export type PoolAddData = {
  image: FileWithPreview;
  name: string;
  description: string;
  metadataLocked: boolean;
  payees: Payee[];
};

export type PoolAddPayee = {
  id: string;
  value: string;
};
