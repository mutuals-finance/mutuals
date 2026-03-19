import { type PoolCreateInput, useCreatePool } from "@mutuals/sdk-react";
import type { UseFormReturn } from "react-hook-form";
import StepperModal, {
  type StepperDialogProps,
} from "@/components/stepper-modal";
import { LoadingStep, ReviewStep, SuccessStep } from "./steps";

interface PoolAddModalProps
  extends Omit<StepperDialogProps, "activeStep" | "steps" | "onNext">,
    UseFormReturn<PoolCreateInput, unknown> {}

export default function PoolAddModal({
  open,
  onOpenChange,
  ...methods
}: PoolAddModalProps) {
  const { getValues } = methods;

  const { status, error, createPool, poolAddress } = useCreatePool();

  const steps = [
    {
      id: "review",
      title: "Review",
      children: () => ReviewStep(methods),
      onNext: async () => {
        const data = getValues();
        await createPool({
          ownerAddress: data.owner ?? "",
          salt: BigInt(0),
          allocations: /*data.allocations ?? */ [],
        });
      },
    },
    {
      id: "sign",
      title: "Approve",
      disabled: true,
      children: () =>
        LoadingStep({
          error,
          isError: status === "error",
          isSuccess: status === "txInProgress",
          description:
            "Please confirm the transaction in your wallet. This will create your Payment Pool.",
          status: (() => {
            if (status === "error") {
              return "Confirmation error";
            }
            if (status === "txInProgress") {
              return "Successfully confirmed";
            }
            return "Waiting for you to confirm";
          })(),
        }),
    },
    {
      id: "wait",
      title: "Wait",
      disabled: true,
      children: () =>
        LoadingStep({
          error,
          isError: status === "error",
          isSuccess: status === "complete",
          description:
            "Please wait for the transaction to be confirmed by the network. This may take a moment, depending on the current workload.",
          status: (() => {
            if (status === "error") {
              return "Confirmation error";
            }
            if (status === "complete") {
              return "Successfully confirmed";
            }
            return "Waiting for transaction confirmation";
          })(),
        }),
    },
    {
      id: "success",
      title: "End",
      disabled: true,
      children: () => SuccessStep({ contractAddress: poolAddress }),
    },
  ];

  return (
    <StepperModal
      onOpenChange={({ open }) => {
        onOpenChange?.({ open });
      }}
      open={open}
      steps={steps}
    />
  );
}
