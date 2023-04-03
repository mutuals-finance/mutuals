import React, { useState } from 'react';
import { useUpdateEffect } from 'react-use';
import { useWaitForTransaction } from 'wagmi';

import useCreateSplitFull from '@/hooks/useCreateSplitFull';

import StepperModal from '@/components/StepperModal';

import { CreateFormData } from '@/templates/split/new';

import { LoadingStep, ReviewStep, SuccessStep } from './steps';

interface NewSplitModalProps {
  onClose: () => void;
  open: boolean;
  data: CreateFormData;
}

export default function NewSplitModal({
  open,
  onClose,
  data,
}: NewSplitModalProps) {
  const payees = data.payees.filter((p) => p.id !== '' && !!p.value);

  const { execute, tx, storage } = useCreateSplitFull({
    ...data,
    payees: payees.map((p) => p.id),
    shares: payees.map((p) => Number(p.value) * 100),
  });

  const receipt = useWaitForTransaction({ hash: tx.data?.hash });

  const steps = [
    {
      id: 'review',
      title: 'Review your Split',
      children: () => ReviewStep({ data }),
    },
    {
      id: 'save',
      title: 'Saving Split Metadata',
      disabled: true,
      children: () =>
        LoadingStep({
          ...storage,
          description:
            'Uploading your Split Metadata on the decentralized IPFS network.',
          status: storage.isError
            ? 'Upload finished with errors'
            : storage.isSuccess
            ? 'Upload finished successfully'
            : 'Waiting for upload to finish',
        }),
    },
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
  const deps = [storage.isSuccess, tx.isSuccess, receipt.isSuccess];

  function reset() {
    setTimeout(() => {
      storage.reset();
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
        execute();
        setCurrentIndex((prev) => prev + 1);
      }}
      onClose={() => {
        onClose();
        reset();
      }}
      currentIndex={currentIndex}
      open={open}
    />
  );
}
