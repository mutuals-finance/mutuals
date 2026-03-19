import {
  Box,
  Card,
  SelectContent,
  SelectItem,
  SelectItemText,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  Span,
  Stack,
  Steps,
  type UseStepsReturn,
} from "@mutuals/ui";
import { poolAddSteps } from "@/features/pool-add/steps";

export type PoolAddPanelProps = UseStepsReturn;

export default function PoolAddPanel({ value, setStep }: PoolAddPanelProps) {
  return (
    <>
      <SelectRoot
        collection={poolAddSteps.collection}
        defaultValue={[poolAddSteps.collection.items[0]?.value]}
        hideFrom={"lg"}
        onValueChange={(e) => {
          setStep(Number(e.value[0]));
        }}
        size={"lg"}
        value={[
          poolAddSteps.collection.items[
            Math.min(value, poolAddSteps.collection.items.length - 1)
          ]?.value,
        ]}
      >
        <SelectTrigger w="full">
          <SelectValueText placeholder="Select step" />
        </SelectTrigger>
        <SelectContent maxW={"full"} minW={"64"} portalled={false}>
          {poolAddSteps.collection.items.map((step) => (
            <SelectItem item={step} key={step.value}>
              <Stack gap={"0"}>
                <SelectItemText textStyle="sm">{step.label}</SelectItemText>
                <Span color="fg.muted" textStyle="xs">
                  {step.description}
                </Span>
              </Stack>
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>

      <Box hideBelow={"lg"} left={"0"} position={"sticky"} top={"24"}>
        <Card.Root>
          <Card.Body>
            <Steps.List minH={"36"}>
              {poolAddSteps.collection.items.map((step, index) => (
                <Steps.Item
                  direction={{ md: "column" }}
                  index={index}
                  key={step.value}
                  title={step.label}
                >
                  <Steps.Indicator />
                  <Stack gap={"0"}>
                    <Steps.Title mb="0" textStyle="sm">
                      {step.label}
                    </Steps.Title>
                    <Steps.Description textStyle="xs">
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
