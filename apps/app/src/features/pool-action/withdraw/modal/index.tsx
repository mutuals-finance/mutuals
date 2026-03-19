import { useState } from "react";
import { useUpdateEffect } from "react-use";

import StepperModal from "@/components/stepper-modal";

import { LoadingStep, SuccessStep } from "./steps";

interface PoolActionWithdrawModalProps {
  error: Error | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  onClose: () => void;
  open: boolean;
  reset: () => void;
}

export default function PoolActionWithdrawModal({
  open,
  onClose,
  ...tx
}: PoolActionWithdrawModalProps) {
  let status: string | undefined;
  if (tx.isError) {
    status = "Confirmation error";
  } else if (tx.isSuccess) {
    status = "Successfully confirmed";
  }

  const steps = [
    {
      id: "sign",
      title: "Confirm in Wallet",
      disabled: true,
      children: () =>
        LoadingStep({
          ...tx,
          description:
            "Please confirm the transaction in your wallet. This will create your Split.",
          status: status || "Waiting for you to confirm",
        }),
    },
    {
      id: "wait",
      title: "Waiting for Confirmation",
      disabled: true,
      children: () =>
        LoadingStep({
          ...tx,
          description:
            "Please wait for the transaction to be confirmed by the network. This may take a moment, depending on the current workload.",
          status: status || "Waiting for transaction confirmation",
        }),
    },
    {
      id: "success",
      title: "Congratulations",
      children: SuccessStep,
    },
  ];

  const [_currentIndex, setCurrentIndex] = useState(0);
  const deps = [tx.isSuccess, tx.isSuccess];

  function _reset() {
    setTimeout(() => {
      tx.reset();
      setCurrentIndex(0);
    }, 200);
  }

  useUpdateEffect(() => {
    if (deps.includes(true)) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, deps);

  return <StepperModal open={open} steps={steps} />;
}
