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

type PoolAddFormSettingsButtonProps = {
  popoverProps?: PopoverRootProps;
} & IconButtonProps;

export default function PoolAddFormSettingsButton({
  popoverProps,
  ...props
}: PoolAddFormSettingsButtonProps) {
  return (
    <PopoverRoot {...popoverProps}>
      <PopoverTrigger asChild>
        <IconButton variant={"subtle"} {...props}>
          <IoSettingsSharp />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent maxW={"72"}>
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
                <NumberInput
                  w={"full"}
                  size="xs"
                  step={0.01}
                  formatOptions={{
                    style: "percent",
                  }}
                  allowMouseWheel={true}
                  defaultValue={"0.1"}
                  min={0}
                  max={0}
                />
              </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item>
              <DataList.ItemLabel minW={"16"}>Slug</DataList.ItemLabel>
              <DataList.ItemValue>
                <InputGroup
                  startElement="/"
                  startElementProps={{ textStyle: "xs" }}
                >
                  <Input
                    id={"slug"}
                    size="xs"
                    ps="3ch"
                    defaultValue="prudent-armadillo"
                  />
                </InputGroup>
              </DataList.ItemValue>
            </DataList.Item>
          </DataList.Root>
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  );
}
