import {
  Box,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepStatus,
} from '@chakra-ui/react';
import React from 'react';

import StepperItem, {
  StepperModalStep,
} from '@/components/StepperModal/StepperItem';

interface StepperModalProps {
  open: boolean;
  onClose: () => void;
  onNext: (step: StepperModalStep, index: number) => void | Promise<void>;
  activeStep: number;
  steps: StepperModalStep[];
}

export default function StepperModal({
  onClose,
  onNext,
  open,
  activeStep,
  steps,
}: StepperModalProps) {
  const activeStepContent = steps[activeStep];
  const activeStepTitle = activeStepContent?.title;

  const max = steps.length - 1;
  const progressPercent = (activeStep / max) * 100;

  return (
    <Modal isOpen={open} onClose={onClose} size={'xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{activeStepTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box position='relative' mb={'6'}>
            <Stepper size='sm' index={activeStep} gap='0'>
              {steps.map((_, index) => (
                <Step key={index}>
                  <StepIndicator bg='white'>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>
                </Step>
              ))}
            </Stepper>
            <Progress
              value={progressPercent}
              position='absolute'
              height='3px'
              width='full'
              top='10px'
              zIndex={-1}
            />
          </Box>

          <Divider my={'6'} />

          {steps.map(({ children, ...item }, index) => {
            return (
              <Box key={item.id}>
                <StepperItem
                  {...item}
                  isActive={index === activeStep}
                  index={index}
                >
                  {children}
                </StepperItem>
              </Box>
            );
          })}
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' onClick={() => onClose()} mr={3}>
            Cancel
          </Button>

          <Button
            isDisabled={activeStepContent?.disabled}
            onClick={() =>
              !!activeStepContent && onNext(activeStepContent, activeStep)
            }
          >
            Next
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
