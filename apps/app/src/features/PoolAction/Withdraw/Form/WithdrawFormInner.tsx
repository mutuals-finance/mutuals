"use client";

import { Box, Button, Stack, VStack } from "@splitfi/ui";
import React from "react";
import { useFormContext } from "react-hook-form";
import { useToggle } from "react-use";
import { GetAccountBalanceReply } from "@ankr.com/ankr.js";

import { DeepPartial } from "#/partial";

import useWithdrawSplit from "@/hooks/useWithdrawSplit";

import FormGroup from "@/components/Form/FormGroup";
import InputSwitch from "@/components/Form/InputSwitch";
import WithdrawModal from "@/features/PoolAction/Withdraw/Modal";
import SummaryTable from "@/features/PoolAction/Withdraw/Form/SummaryTable";
import WithdrawTable from "@/features/PoolAction/Withdraw/Form/WithdrawTable";
import { type Split } from "@splitfi/sdk/thegraph";
import { WithdrawData } from "@/features/PoolAction/types";
import { StackProps } from "@chakra-ui/react";

export interface PoolActionWithdrawFormContentProps extends StackProps {
  balance?: GetAccountBalanceReply;
  pool?: DeepPartial<Split>;
}

export default function PoolActionWithdrawFormContent({
  balance,
  pool,
  children,
  ...props
}: PoolActionWithdrawFormContentProps) {
  const {
    watch,
    formState: { isValid },
  } = useFormContext<WithdrawData>();

  const assets = watch("assets");
  const distribute = watch("distribute");

  const { ...tx } = useWithdrawSplit(pool!.address, assets);
  const [isModalOpen, setIsModalOpen] = useToggle(false);

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

        <FormGroup px="6">
          <InputSwitch label={"Distribute"} id={"distribute"} />
        </FormGroup>

        <FormGroup>
          <WithdrawTable balance={balance} />
        </FormGroup>
      </VStack>

      <Stack
        flexShrink={"0"}
        p={"6"}
        gap={"6"}
        borderTop={"1px solid"}
        borderColor={"border.1"}
      >
        <SummaryTable distribute={distribute} assets={assets} />

        <Button
          colorScheme="primary"
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
