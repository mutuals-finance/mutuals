"use client";

import { Box, Button, Stack, ScrollArea, StackProps } from "@mutuals/ui";
import React, { useMemo } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { useToggle } from "react-use";
import SummaryTable from "@/features/PoolAction/Withdraw/Form/SummaryTable";
import WithdrawTable from "@/features/PoolAction/Withdraw/Form/WithdrawTable";
import { WithdrawData } from "@/features/PoolAction/types";
import { AssetItem } from "@/features/Asset/types";

export interface WithdrawFormContentProps extends StackProps {
  balance?: AssetItem[];
}

export default function PoolActionWithdrawFormContent({
  balance = [],
  children,
  ...props
}: WithdrawFormContentProps) {
  const {
    setValue,
    control,
    formState: { isValid },
  } = useFormContext<WithdrawData>();

  const selectedAssets = useWatch({ name: "assets", control }) ?? {};
  const distribute = useWatch({ name: "distribute", control });

  const [isModalOpen, setIsModalOpen] = useToggle(false);

  const memoizedBalance = useMemo(() => balance, [balance]);

  return (
    <>
      <ScrollArea.Root size="xs" h="full">
        <ScrollArea.Viewport>
          <ScrollArea.Content
            w={"full"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"stretch"}
            flex={"1"}
            pt="6"
            gap="6"
          >
            <Box px={{ base: "4", lg: "0" }}>{children}</Box>

            <WithdrawTable
              data={memoizedBalance}
              state={{
                rowSelection: selectedAssets,
              }}
              onRowSelectionChange={(updaterOrValue) => {
                const isUpdaterFn = typeof updaterOrValue === "function";
                const newValue = isUpdaterFn
                  ? updaterOrValue(selectedAssets)
                  : updaterOrValue;

                setValue("assets", newValue, { shouldValidate: true });
              }}
            />
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical" />
        <ScrollArea.Corner bg="bg" />
      </ScrollArea.Root>

      <Stack
        flexShrink={"0"}
        pt={"4"}
        px={{ base: "4", lg: "0" }}
        pb={"6"}
        gap={"4"}
        borderTop={"1px solid"}
        borderColor={"border"}
      >
        <SummaryTable
          data={memoizedBalance}
          distribute={distribute}
          assets={selectedAssets}
        />

        <Button
          colorPalette="primary"
          disabled={!isValid}
          type={"button"}
          w={"full"}
          onClick={() => {
            //tx.writeContract();
            setIsModalOpen(true);
          }}
        >
          Withdraw
        </Button>
      </Stack>
    </>
  );
}
