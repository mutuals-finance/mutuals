import { useSteps } from "@mutuals/ui";
import { useUpdateEffect } from "react-use";
import useCreateSplitFull from "@/hooks/useCreateSplitFull";
import StepperModal from "@/components/StepperModal";
import { LoadingStep, ReviewStep, SuccessStep } from "./steps";
import { PoolAddData } from "@/features/PoolAdd/types";

interface PoolAddModalProps {
  onClose: () => void;
  open: boolean;
  data: PoolAddData;
}

export default function PoolAddModal({
  open,
  onClose,
  data,
}: PoolAddModalProps) {
  const payees = data.payees.filter((p) => p.id !== "" && !!p.value);

  const { execute, tx, storage } = useCreateSplitFull({
    ...data,
    payees: payees.map((p) => p.id),
    shares: payees.map((p) => Number(p.value) * 100),
  });

  const steps = [
    {
      id: "review",
      title: "Review your Split",
      children: () => ReviewStep({ data }),
    },
    {
      id: "save",
      title: "Saving Split Metadata",
      disabled: true,
      children: () =>
        LoadingStep({
          ...storage,
          description:
            "Uploading your Split Metadata on the decentralized IPFS network.",
          status: storage.isError
            ? "Upload finished with errors"
            : storage.isSuccess
              ? "Upload finished successfully"
              : "Waiting for upload to finish",
        }),
    },
    {
      id: "sign",
      title: "Confirm in Wallet",
      disabled: true,
      children: () =>
        LoadingStep({
          ...tx,
          description:
            "Please confirm the transaction in your wallet. This will create your Split.",
          status: tx.isError
            ? "Confirmation error"
            : tx.isSuccess
              ? "Successfully confirmed"
              : "Waiting for you to confirm",
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
          status: tx.isError
            ? "Confirmation error"
            : tx.isSuccess
              ? "Successfully confirmed"
              : "Waiting for transaction confirmation",
        }),
    },
    {
      id: "success",
      title: "Congratulations",
      disabled: true,
      children: () =>
        SuccessStep({ contractAddress: tx.data?.contractAddress! }),
    },
  ];
  const { activeStep, setActiveStep, goToNext } = useSteps({
    count: steps.length,
  });

  const deps = [storage.isSuccess, tx.isSuccess, tx.isSuccess];

  function reset() {
    setTimeout(() => {
      storage.reset();
      tx.reset();
      setActiveStep(0);
    }, 200);
  }

  useUpdateEffect(() => {
    if (deps.includes(true)) {
      goToNext();
    }
  }, deps);

  return (
    <StepperModal
      steps={steps}
      onNext={() => {
        execute();
        goToNext();
      }}
      onClose={() => {
        onClose();
        reset();
      }}
      activeStep={activeStep}
      open={open}
    />
  );
}
