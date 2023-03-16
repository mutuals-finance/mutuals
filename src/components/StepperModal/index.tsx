import Modal from '@/components/Modal';
import React from 'react';
import StepperItem, {
  StepperModalStep,
} from '@/components/StepperModal/StepperItem';
import { ButtonOutline, ButtonPrimary } from '@/components/Button';

interface StepperModalProps {
  open: boolean;
  onClose: () => void;
  onNext: (
    current: StepperModalStep,
    currentIndex: number
  ) => void | Promise<void>;
  currentIndex: number;
  steps: StepperModalStep[];
}

export default function StepperModal({
  onClose,
  onNext,
  open,
  currentIndex,
  steps,
}: StepperModalProps) {
  const current = steps[currentIndex];

  return (
    <Modal
      header={
        <span className={'block truncate text-lg font-semibold'}>
          {current?.title}
        </span>
      }
      onClose={onClose}
      open={open}
      dense={true}
    >
      <div className='flex w-96 flex-col space-y-6'>
        <div>
          <ul className='flex flex-col'>
            {steps.map(({ children, ...item }, index) => {
              return (
                <li key={item.id} className={'block'}>
                  <StepperItem
                    {...item}
                    isActive={index === currentIndex}
                    index={index}
                  >
                    {children}
                  </StepperItem>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={'flex items-center justify-center space-x-6'}>
          <ButtonOutline
            className={'flex-1'}
            fullWidth={true}
            onClick={() => onClose()}
          >
            Cancel
          </ButtonOutline>

          <ButtonPrimary
            className={'flex-1'}
            fullWidth={true}
            disabled={current?.disabled}
            onClick={() => !!current && onNext(current, currentIndex)}
          >
            Next
          </ButtonPrimary>
        </div>
      </div>
    </Modal>
  );
}
