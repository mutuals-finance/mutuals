import {
  Box,
  Stack,
  Steps,
  Card,
  SelectRoot,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValueText,
  SelectItemText,
  Span,
  UseStepsReturn,
} from "@mutuals/ui";
import { poolAddSteps } from "@/features/PoolAdd/steps";

export type PoolAddPanelProps = UseStepsReturn;

export default function PoolAddPanel({ value, setStep }: PoolAddPanelProps) {
  return (
    <>
      <SelectRoot
        size={"lg"}
        collection={poolAddSteps.collection}
        defaultValue={[poolAddSteps.collection.items[0]!.value]}
        value={[
          poolAddSteps.collection.items[
            Math.min(value, poolAddSteps.collection.items.length - 1)
          ]!.value,
        ]}
        onValueChange={(e) => {
          setStep(Number(e.value[0]!));
        }}
        hideFrom={"lg"}
      >
        <SelectTrigger w="full">
          <SelectValueText placeholder="Select step" />
        </SelectTrigger>
        <SelectContent portalled={false} maxW={"full"} minW={"64"}>
          {poolAddSteps.collection.items.map((step) => (
            <SelectItem item={step} key={step.value}>
              <Stack>
                <SelectItemText>{step.label}</SelectItemText>
                <Span color="fg.muted" textStyle="sm">
                  {step.description}
                </Span>
              </Stack>
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>

      <Box position={"sticky"} top={"24"} left={"0"} hideBelow={"lg"}>
        <Card.Root>
          <Card.Body>
            <Steps.List h={"36"}>
              {poolAddSteps.collection.items.map((step, index) => (
                <Steps.Item
                  key={step.value}
                  index={index}
                  title={step.label}
                  direction={{ md: "column" }}
                >
                  <Steps.Indicator />
                  <Stack>
                    <Steps.Title textStyle="md">{step.label}</Steps.Title>
                    <Steps.Description textStyle="sm">
                      {step.description}
                    </Steps.Description>
                  </Stack>
                  <Steps.Separator />
                </Steps.Item>
              ))}
            </Steps.List>
          </Card.Body>
        </Card.Root>
      </Box>
    </>
  );
}
