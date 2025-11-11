"use client";

import {
  PopoverRoot,
  PopoverTrigger,
  PopoverBody,
  PopoverContent,
  PopoverRootProps,
  IconButton,
  IconButtonProps,
  SwitchInput,
  DataList,
  InputGroup,
  Input,
  NumberInput,
} from "@mutuals/ui";
import { IoSettingsSharp } from "react-icons/io5";
import React from "react";

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
                  startElementProps={{ paddingInlineStart: "1ch" }}
                  startElement={"%"}
                >
                  <NumberInput
                    inputProps={{
                      ps: "3ch",
                    }}
                    w={"full"}
                    step={0.1}
                    id={"donationBps"}
                    size="xs"
                    allowMouseWheel={true}
                    min={0}
                    max={100}
                    transform={{
                      output: (e) => e.valueAsNumber,
                      input: (value) => (!value ? 0 : String(value)),
                    }}
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
                  <Input id={"slug"} size="xs" ps="3ch" />
                </InputGroup>
              </DataList.ItemValue>
            </DataList.Item>
          </DataList.Root>
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  );
}
