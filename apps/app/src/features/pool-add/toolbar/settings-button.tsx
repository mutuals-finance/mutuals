"use client";

import {
  DataList,
  IconButton,
  type IconButtonProps,
  Input,
  InputGroup,
  NumberInput,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  type PopoverRootProps,
  PopoverTrigger,
  SwitchInput,
} from "@mutuals/ui";
import { IoSettingsSharp } from "react-icons/io5";

type PoolAddToolbarSettingsButtonProps = {
  popoverProps?: PopoverRootProps;
} & IconButtonProps;

export default function PoolAddToolbarSettingsButton({
  popoverProps,
  ...props
}: PoolAddToolbarSettingsButtonProps) {
  return (
    <PopoverRoot {...popoverProps}>
      <PopoverTrigger asChild>
        <IconButton variant={"subtle"} {...props}>
          <IoSettingsSharp />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent maxW={"64"}>
        <PopoverBody>
          <DataList.Root orientation="horizontal">
            <DataList.Item>
              <DataList.ItemLabel minW={"16"}>Private</DataList.ItemLabel>
              <DataList.ItemValue>
                <SwitchInput id={"private"} />
              </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item>
              <DataList.ItemLabel minW={"16"}>Donation</DataList.ItemLabel>
              <DataList.ItemValue>
                <InputGroup
                  startElement={"%"}
                  startElementProps={{ paddingInlineStart: "1ch" }}
                >
                  <NumberInput
                    allowMouseWheel={true}
                    id={"donationBps"}
                    inputProps={{
                      ps: "3ch",
                    }}
                    max={100}
                    min={0}
                    size="xs"
                    step={0.1}
                    transform={{
                      output: (e) => e.valueAsNumber,
                      input: (value) => (value ? String(value) : 0),
                    }}
                    w={"full"}
                  />
                </InputGroup>
              </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item>
              <DataList.ItemLabel minW={"16"}>Slug</DataList.ItemLabel>
              <DataList.ItemValue>
                <InputGroup
                  startElement="/"
                  startElementProps={{ textStyle: "xs" }}
                >
                  <Input id={"slug"} ps="3ch" size="xs" />
                </InputGroup>
              </DataList.ItemValue>
            </DataList.Item>
          </DataList.Root>
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  );
}
