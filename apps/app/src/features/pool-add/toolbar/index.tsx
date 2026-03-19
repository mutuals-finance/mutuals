import {
  Button,
  GridItem,
  IconButton,
  Stack,
  Steps,
  Text,
  type UseStepsReturn,
} from "@mutuals/ui";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import PoolAddToolbarSettingsButton from "@/features/pool-add/toolbar/settings-button";

export type PoolAddPanelProps = UseStepsReturn;

export default function PoolAddToolbar({
  hasPrevStep,
  hasNextStep,
}: PoolAddPanelProps) {
  return (
    <>
      <GridItem colSpan={{ base: 1, lg: 8 }}>
        <Stack direction="row" justifyContent={"space-between"}>
          <Stack alignItems={"center"} direction={"row"}>
            <Steps.PrevTrigger asChild>
              <IconButton disabled={!hasPrevStep} variant="subtle">
                <IoChevronBackSharp />
              </IconButton>
            </Steps.PrevTrigger>
            <Text
              as={"span"}
              color={hasPrevStep ? "fg" : "fg.subtle"}
              hideBelow={"lg"}
              textStyle={"sm"}
            >
              Previous
            </Text>
          </Stack>
          <Stack direction="row" justifyContent={"flex-end"}>
            <Button
              disabled={true}
              variant={"subtle"}
              /*
              onClick={() => onSubmit(methods.getValues(), PoolStatus.Draft)}
*/
            >
              Save Draft
            </Button>
            {/*
            <PoolAddToolbarResetButton />

            <Button variant={"subtle"}>
              <IoDownloadSharp />
              Export
            </Button>
            */}
            <PoolAddToolbarSettingsButton />
          </Stack>
        </Stack>
      </GridItem>
      <GridItem colSpan={{ base: 1, lg: 3 }} hideBelow={"lg"}>
        <Stack
          alignItems={"center"}
          direction={"row"}
          justifyContent={"flex-end"}
        >
          <Text
            as={"span"}
            color={hasNextStep ? "fg" : "fg.subtle"}
            textStyle={"sm"}
          >
            Next
          </Text>
          <Steps.NextTrigger asChild>
            <IconButton disabled={!hasNextStep} variant="subtle">
              <IoChevronForwardSharp />
            </IconButton>
          </Steps.NextTrigger>
        </Stack>
      </GridItem>
    </>
  );
}
