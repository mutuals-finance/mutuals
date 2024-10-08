import {
  Box,
  Button,
  DialogBody,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  ProgressCircleRing,
  ProgressCircleRoot,
  ProgressCircleValueText,
  Separator,
  DialogRootProps,
  StepsRoot,
  StepsItem,
  StepsList,
} from "@mutuals/ui";
import StepperItem, {
  StepperModalStep,
} from "@/components/StepperModal/StepperItem";

interface StepperDialogProps extends Omit<DialogRootProps, "children"> {
  onNext: (step: StepperModalStep, index: number) => void | Promise<void>;
  activeStep: number;
  steps: StepperModalStep[];
}

export default function StepperDialog({
  onOpenChange,
  onNext,
  activeStep,
  steps,
  size = "xl",
  ...props
}: StepperDialogProps) {
  const activeStepContent = steps[activeStep];
  const activeStepTitle = activeStepContent?.title;

  const max = steps.length - 1;
  const progressPercent = (activeStep / max) * 100;

  return (
    <DialogRoot onOpenChange={onOpenChange} size={size} {...props}>
      <DialogBackdrop />
      <DialogContent>
        <StepsRoot
          defaultValue={0}
          count={steps.length}
          size="sm"
          step={activeStep}
          linear={true}
        >
          <DialogHeader>{activeStepTitle}</DialogHeader>
          <DialogCloseTrigger />
          <DialogBody>
            <Box position="relative" mb={"6"}>
              <StepsList>
                {steps.map((step, index) => (
                  <StepsItem key={step.id} index={index} title={step.title} />
                ))}
              </StepsList>

              <ProgressCircleRoot
                position="absolute"
                top="10px"
                zIndex={-1}
                value={progressPercent}
                size="lg"
              >
                <ProgressCircleValueText />
                <ProgressCircleRing />
              </ProgressCircleRoot>
            </Box>

            <Separator my={"6"} />

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
          </DialogBody>

          <DialogFooter>
            <Button
              variant="ghost"
              onClick={() => onOpenChange?.({ open: false })}
              mr={3}
            >
              Cancel
            </Button>

            <Button
              disabled={activeStepContent?.disabled}
              onClick={() =>
                !!activeStepContent && onNext(activeStepContent, activeStep)
              }
            >
              Next
            </Button>
          </DialogFooter>
        </StepsRoot>
      </DialogContent>
    </DialogRoot>
  );
}
