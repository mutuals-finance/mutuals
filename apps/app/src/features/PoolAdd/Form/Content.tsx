import { Button, Stack } from "@mutuals/ui";
import { UseFormReturn } from "react-hook-form";
import FormGroup from "@/components/Form/FormGroup";
import Input from "@/components/Form/Input";
import TextArea from "@/components/Form/TextArea";

import Allocations, {
  PoolAddAllocationProps,
} from "@/features/PoolAdd/Allocations";
import FileUpload from "@/components/Form/FileUpload";

interface PoolAddFormContentProps extends PoolAddAllocationProps {
  onModalClose: () => void;
  isModalOpen: boolean;
}

export default function PoolAddFormContent({
  isModalOpen,
  onModalClose,
  ...props
}: PoolAddFormContentProps) {
  return <></>;
}
