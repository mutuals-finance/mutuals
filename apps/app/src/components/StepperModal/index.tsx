import {
  Button,
  DialogBody,
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
import { useStateList } from "react-use";

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
      size={size}
      scrollBehavior="inside"
      {...props}
    >
      <DialogContent backdrop={true}>
        <StepsRoot
          w={"full"}
          defaultValue={0}
          count={steps.length}
          size="sm"
          step={currentIndex}
        >
          <DialogHeader>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              mb={"4"}
            >
              <DialogTitle fontWeight={"medium"}>{state.title}</DialogTitle>
            </Stack>
            <StepsList>
              {steps.map((step, index) => (
                <StepsItem key={step.id} index={index} />
              ))}
            </StepsList>
          </DialogHeader>

          <DialogCloseTrigger />

          <DialogBody w={"full"}>
            {steps.map(({ children, ...item }, index) => {
              return (
                <StepperItem
                  key={item.id}
                  isActive={index === currentIndex}
                  index={index}
                  {...item}
                >
                  {children}
                </StepperItem>
              );
            })}
          </DialogBody>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                reset();
                onOpenChange?.({ open: false });
              }}
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
