import { SendTransactionResult } from '@wagmi/core';
import React, { useState } from 'react';
import { useUpdateEffect } from 'react-use';
import { useWaitForTransaction } from 'wagmi';

import StepperModal from '@/components/StepperModal';

import { LoadingStep, SuccessStep } from './steps';

interface WithdrawModalProps {
  onClose: () => void;
  open: boolean;
  data?: SendTransactionResult;
  error: Error | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  reset: () => void;
}

export default function WithdrawModal({
  open,
  onClose,
  ...tx
}: WithdrawModalProps) {
  const receipt = useWaitForTransaction({ hash: tx.data?.hash });

  const steps = [
    {
      id: 'sign',
      title: 'Confirm in Wallet',
      disabled: true,
      children: () =>
        LoadingStep({
          ...tx,
          description:
            'Please confirm the transaction in your wallet. This will create your Split.',
          status: tx.isError
            ? 'Confirmation error'
            : tx.isSuccess
              ? 'Successfully confirmed'
              : 'Waiting for you to confirm',
        }),
    },
    {
      id: 'wait',
      title: 'Waiting for Confirmation',
      disabled: true,
      children: () =>
        LoadingStep({
          ...receipt,
          description:
            'Please wait for the transaction to be confirmed by the network. This may take a moment, depending on the current workload.',
          status: receipt.isError
            ? 'Confirmation error'
            : receipt.isSuccess
              ? 'Successfully confirmed'
              : 'Waiting for transaction confirmation',
        }),
    },
    {
      id: 'success',
      title: 'Congratulations',
      children: SuccessStep,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const deps = [tx.isSuccess, receipt.isSuccess];

  function reset() {
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

  return (
    <StepperModal
      steps={steps}
      onNext={() => {
        setCurrentIndex((prev) => prev + 1);
      }}
      onClose={() => {
        onClose();
        reset();
      }}
      activeStep={currentIndex}
      open={open}
    />
  );
}
