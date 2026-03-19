import {
  Button,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  type DialogRootProps,
  DialogTitle,
  Stack,
  StepsItem,
  StepsList,
  StepsRoot,
} from "@mutuals/ui";
import { useStateList } from "react-use";
import StepperItem, {
  type StepperModalStep,
} from "@/components/stepper-modal/stepper-item";

export interface StepperDialogProps extends Omit<DialogRootProps, "children"> {
  steps: StepperModalStep[];
}

export default function StepperDialog({
  onOpenChange,
  steps,
  size = "md",
  ...props
}: StepperDialogProps) {
  const { currentIndex, state, next, setStateAt } = useStateList(steps);

  function reset() {
    setTimeout(() => {
      // resetCreatePoolTx ();
      setStateAt(0);
    }, 200);
  }

  return (
    <DialogRoot
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
      size={size}
      {...props}
    >
      <DialogContent backdrop={true}>
        <StepsRoot
          count={steps.length}
          defaultValue={0}
          size="sm"
          step={currentIndex}
          w={"full"}
        >
          <DialogHeader>
            <Stack
              alignItems={"center"}
              direction={"row"}
              justifyContent={"space-between"}
              mb={"4"}
            >
              <DialogTitle fontWeight={"medium"}>{state.title}</DialogTitle>
            </Stack>
            <StepsList>
              {steps.map((step, index) => (
                <StepsItem index={index} key={step.id} />
              ))}
            </StepsList>
          </DialogHeader>

          <DialogCloseTrigger />

          <DialogBody w={"full"}>
            {steps.map(({ children, ...item }, index) => {
              return (
                <StepperItem
                  index={index}
                  isActive={index === currentIndex}
                  key={item.id}
                  {...item}
                >
                  {children}
                </StepperItem>
              );
            })}
          </DialogBody>

          <DialogFooter>
            <Button
              onClick={() => {
                reset();
                onOpenChange?.({ open: false });
              }}
              variant="outline"
            >
              Cancel
            </Button>

            <Button
              disabled={state?.disabled}
              onClick={() => {
                next();
                state.onNext?.(state, currentIndex);
              }}
            >
              Next
            </Button>
          </DialogFooter>
        </StepsRoot>
      </DialogContent>
    </DialogRoot>
  );
}
