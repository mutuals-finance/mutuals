"use client";

import { Box, Button, Stack, VStack, StackProps } from "@mutuals/ui";
import React from "react";
import { useFormContext } from "react-hook-form";
import { useToggle } from "react-use";
import { GetAccountBalanceReply } from "@ankr.com/ankr.js";

import useWithdrawSplit from "@/hooks/useWithdrawSplit";

import WithdrawModal from "@/features/PoolAction/Withdraw/Modal";
import SummaryTable from "@/features/PoolAction/Withdraw/Form/SummaryTable";
import WithdrawTable from "@/features/PoolAction/Withdraw/Form/WithdrawTable";
import { type Pool } from "@mutuals/graphql-client-nextjs";
import { WithdrawData } from "@/features/PoolAction/types";

export interface WithdrawFormContentProps extends StackProps {
  balance?: GetAccountBalanceReply;
  pool?: Pool;
}

export default function PoolActionWithdrawFormContent({
  balance,
  pool,
  children,
  ...props
}: WithdrawFormContentProps) {
  const {
    setValue,
    watch,
    formState: { isValid },
  } = useFormContext<WithdrawData>();

  const selectedAssets = watch("assets");
  const distribute = watch("distribute");

  const { ...tx } = useWithdrawSplit(pool!.address, []);
  const [isModalOpen, setIsModalOpen] = useToggle(false);
  const data = balance?.assets ?? [];

  return (
    <>
      <WithdrawModal
        {...tx}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <VStack
        alignItems={"stretch"}
        pt="6"
        flex={"1"}
        gap="6"
        overflowY={"auto"}
        {...props}
      >
        <Box px="6">{children}</Box>

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
      </VStack>

      <Stack
        flexShrink={"0"}
        p={"6"}
        gap={"6"}
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
          disabled={!isValid || tx.isError || tx.isLoading}
          type={"button"}
          w={"full"}
          onClick={() => {
            tx.writeContract();
            setIsModalOpen(true);
          }}
        >
          Withdraw
        </Button>
      </Stack>
    </>
  );
}
