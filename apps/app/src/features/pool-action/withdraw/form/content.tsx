"use client";

import { Box, Button, ScrollArea, Stack, type StackProps } from "@mutuals/ui";
import { useMemo } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { useToggle } from "react-use";
import type { AssetItem } from "@/features/asset/types";
import type { WithdrawData } from "@/features/pool-action/types";
import SummaryTable from "@/features/pool-action/withdraw/form/summary-table";
import WithdrawTable from "@/features/pool-action/withdraw/form/withdraw-table";

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

  const [_isModalOpen, setIsModalOpen] = useToggle(false);

  const memoizedBalance = useMemo(() => balance, [balance]);

  return (
    <>
      <ScrollArea.Root flex={"1"} size="xs">
        <ScrollArea.Viewport>
          <ScrollArea.Content
            alignItems={"stretch"}
            display={"flex"}
            flex={"1"}
            flexDirection={"column"}
            gap="6"
            w={"full"}
          >
            <Box px={{ mdDown: "6" }}>{children}</Box>

            <WithdrawTable
              data={memoizedBalance}
              onRowSelectionChange={(updaterOrValue) => {
                const isUpdaterFn = typeof updaterOrValue === "function";
                const newValue = isUpdaterFn
                  ? updaterOrValue(selectedAssets)
                  : updaterOrValue;

                setValue("assets", newValue, { shouldValidate: true });
              }}
              state={{
                rowSelection: selectedAssets,
              }}
            />
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical" />
        <ScrollArea.Corner bg="bg" />
      </ScrollArea.Root>

      <Stack
        flexShrink={"0"}
        gap={"6"}
        mt={"auto"}
        px={{ mdDown: "4" }}
        py={"6"}
        {...props}
      >
        <SummaryTable
          assets={selectedAssets}
          data={memoizedBalance}
          distribute={distribute}
        />

        <Button
          colorPalette="primary"
          disabled={!isValid}
          onClick={() => {
            //tx.writeContract();
            setIsModalOpen(true);
          }}
          type={"button"}
          w={"full"}
        >
          Withdraw
        </Button>
      </Stack>
    </>
  );
}
