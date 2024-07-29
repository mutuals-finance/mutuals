import { HStack, IconButton, useNumberInput } from "@mutuals/ui";
import React from "react";
import { useFormContext } from "react-hook-form";
import { IoAdd, IoRemove } from "react-icons/io5";

import Input from "@/components/Form/Input";
import { InputNumberBaseProps } from "@/components/Form/types";

export default function InputNumber({ ...props }: InputNumberBaseProps) {
  const { setValue, getValues } = useFormContext();

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      min: Number(props.validation?.min),
      max: Number(props.validation?.max),
      allowMouseWheel: true,
      onChange: (_, valueAsNumber) => {
        setValue(props.id || "", valueAsNumber);
      },
      value: getValues(props.id || ""),
      ...props,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack>
      <IconButton
        aria-label="Decrease value"
        icon={<IoRemove />}
        type={"button"}
        {...dec}
      />
      <Input hideWrapper={true} textAlign={"center"} {...input} />
      <IconButton
        aria-label="Increase value"
        icon={<IoAdd />}
        type={"button"}
        {...inc}
      />
    </HStack>
  );
}
