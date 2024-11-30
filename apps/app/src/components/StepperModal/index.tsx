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
  DialogRootProps,
  StepsRoot,
  StepsItem,
  StepsList,
  Stack,
  DialogTitle,
} from "@mutuals/ui";
import StepperItem, {
  StepperModalStep,
} from "@/components/StepperModal/StepperItem";

export interface StepperDialogProps extends Omit<DialogRootProps, "children"> {
  onNext: (step: StepperModalStep, index: number) => void | Promise<void>;
  activeStep: number;
  steps: StepperModalStep[];
}

export default function StepperDialog({
  onOpenChange,
  onNext,
  activeStep,
  steps,
  size = "md",
  ...props
}: StepperDialogProps) {
  const activeStepContent = steps[activeStep];
  const activeStepTitle = activeStepContent?.title;

  return (
    <DialogRoot onOpenChange={onOpenChange} size={size} {...props}>
      <DialogBackdrop />

      <DialogContent>
        <DialogHeader>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <DialogTitle fontWeight={"medium"}>{activeStepTitle}</DialogTitle>

            <DialogCloseTrigger />
          </Stack>
        </DialogHeader>
        <DialogBody>
          <StepsRoot
            orientation="vertical"
            defaultValue={0}
            count={steps.length}
            size="sm"
            step={activeStep}
            minH={"xs"}
          >
            <StepsList>
              {steps.map((step, index) => (
                <StepsItem key={step.id} index={index} />
              ))}
            </StepsList>
            {steps.map(({ children, ...item }, index) => {
              return (
                <StepperItem
                  key={item.id}
                  {...item}
                  isActive={index === activeStep}
                  index={index}
                >
                  {children}
                </StepperItem>
              );
            })}
          </StepsRoot>
        </DialogBody>

        <DialogFooter>
          <Button
            variant="ghost"
            onClick={() => onOpenChange?.({ open: false })}
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
      </DialogContent>
    </DialogRoot>
  );
}
