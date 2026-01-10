"use client";

import { Box, Button, Stack, ScrollArea, StackProps } from "@mutuals/ui";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { useToggle } from "react-use";

import SummaryTable from "@/features/PoolAction/Withdraw/Form/SummaryTable";
import WithdrawTable from "@/features/PoolAction/Withdraw/Form/WithdrawTable";
import { type Pool } from "@mutuals/graphql-client-nextjs";
import { WithdrawData } from "@/features/PoolAction/types";
import { DeepPartial } from "#/partial";
import { ERC20TokenBalance } from "@/lib/moralis";

export interface WithdrawFormContentProps extends StackProps {
  balance?: ERC20TokenBalance[];
  pool?: DeepPartial<Pool>;
}

export default function PoolActionWithdrawFormContent({
  balance = [],
  pool,
  children,
  ...props
}: WithdrawFormContentProps) {
  const {
    setValue,
    control,
    formState: { isValid },
  } = useFormContext<WithdrawData>();

  const selectedAssets = useWatch({ name: "assets", control });
  const distribute = useWatch({ name: "distribute", control });

  //const { ...tx } = useWithdrawSplit(pool!.contract?.address, []);
  const [isModalOpen, setIsModalOpen] = useToggle(false);
  const data = balance;

  return (
    <>
      {/*
      <WithdrawModal
        {...tx}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
*/}

      <ScrollArea.Root size="xs">
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

            {/*<InputSwitch label={"Distribute"} id={"distribute"} />*/}

            <WithdrawTable
              data={data}
              state={{
                rowSelection: selectedAssets,
              }}
              onRowSelectionChange={(updaterOrValue) => {
                const isUpdaterFn = typeof updaterOrValue == "function";
                setValue(
                  "assets",
                  isUpdaterFn
                    ? updaterOrValue(selectedAssets ?? {})
                    : updaterOrValue,
                );
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
          data={data}
          distribute={distribute}
          assets={selectedAssets}
        />

        <Button
          colorPalette="primary"
          disabled={false && !isValid} //  || tx.isError || tx.isLoading}
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
