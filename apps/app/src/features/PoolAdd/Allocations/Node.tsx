import {
  Button,
  MenuList,
  MenuItem,
  MenuButton,
  Menu,
  HStack,
  Box,
  BoxProps,
} from "@mutuals/ui";
import {
  useFieldArray,
  useForm,
  useFormContext,
  UseFormReturn,
  useWatch,
} from "react-hook-form";

import FormGroup from "@/components/Form/FormGroup";

import PoolAddAllocationsNodePercentage from "@/features/PoolAdd/Allocations/NodePercentage";
import {
  AllocationNode,
  PoolAddData,
  PoolAddPayee,
} from "@/features/PoolAdd/types";
import { IoAdd, IoAddCircle } from "react-icons/io5";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import InputFieldArray from "@/components/Form/InputFieldArray";
import PoolAddPayeesFooter from "@/features/PoolAdd/Payees/Footer";
import Input from "@/components/Form/Input";
import InputNumber from "@/components/Form/InputNumber";
import {
  Allocation,
  AllocationPercentage,
  AllocationType,
} from "@mutuals/sdk-react";

interface PoolAddAllocationProps extends BoxProps {
  index: number;
}

export default function PoolAddAllocationsNode({
  index,
  ...props
}: PoolAddAllocationProps) {
  const { control } = useFormContext<PoolAddData>();

  const allocation = useWatch({
    control,
    name: `allocations.${index}`,
  });

  return (
    <Box {...props}>
      {allocation?.node && (
        <>
          {allocation.node.allocationType === AllocationType.Percentage ? (
            <PoolAddAllocationsNodePercentage id={"allocations"} />
          ) : (
            <>Not Percentage</>
          )}
        </>
      )}
      {allocation?.children && (
        <Box>
          {allocation.children.map((i: number) => (
            <PoolAddAllocationsNode key={i} index={i} />
          ))}
        </Box>
      )}
    </Box>
  );
}
