import {
  Stack,
  Steps,
  UseStepsReturn,
  GridItem,
  IconButton,
  Text,
  Button,
} from "@mutuals/ui";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import React from "react";
import PoolAddToolbarSettingsButton from "@/features/PoolAdd/Toolbar/SettingsButton";

export type PoolAddPanelProps = UseStepsReturn;

export default function PoolAddToolbar({
  hasPrevStep,
  hasNextStep,
}: PoolAddPanelProps) {
  return (
    <>
      <GridItem colSpan={{ base: 1, lg: 6 }}>
        <Stack direction="row" justifyContent={"space-between"}>
          <Stack direction={"row"} alignItems={"center"}>
            <Steps.PrevTrigger asChild>
              <IconButton variant="subtle" disabled={!hasPrevStep}>
                <IoChevronBackSharp />
              </IconButton>
            </Steps.PrevTrigger>
            <Text
              as={"span"}
              textStyle={"sm"}
              color={!hasPrevStep ? "fg.subtle" : "fg"}
              hideBelow={"lg"}
            >
              Previous
            </Text>
          </Stack>
          <Stack direction="row" justifyContent={"flex-end"}>
            <Button
              variant={"subtle"}
              disabled={true}
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
          direction={"row"}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          <Text
            as={"span"}
            textStyle={"sm"}
            color={!hasNextStep ? "fg.subtle" : "fg"}
          >
            Next
          </Text>
          <Steps.NextTrigger asChild>
            <IconButton variant="subtle" disabled={!hasNextStep}>
              <IoChevronForwardSharp />
            </IconButton>
          </Steps.NextTrigger>
        </Stack>
      </GridItem>
    </>
  );
}
