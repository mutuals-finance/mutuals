"use client";

import { Balance } from "@ankr.com/ankr.js/dist/types";
import { Box, Button, Stack, VStack } from "@splitfi/ui";
import React, { PropsWithChildren } from "react";
import { useFormContext } from "react-hook-form";
import { useToggle } from "react-use";

import useWithdrawSplit from "@/hooks/useWithdrawSplit";

import FormGroup from "@/components/Form/FormGroup";
import InputSwitch from "@/components/Form/InputSwitch";

import WithdrawModal from "@/app/(dashboard)/pool/[id]/(overview)/withdraw/WithdrawModal";

import { GetAccountBalanceReply } from "@ankr.com/ankr.js";
import {
  FragmentType,
  useFragment as getFragment,
} from "src/lib/graphql/thegraph/__generated__";
import {
  shareFragment,
  splitBaseFragment,
} from "@/lib/graphql/thegraph/fragments";
import SummaryTable from "@/app/(dashboard)/pool/[id]/(overview)/withdraw/WithdrawForm/SummaryTable";
import WithdrawTable from "@/app/(dashboard)/pool/[id]/(overview)/withdraw/WithdrawForm/WithdrawTable";

export interface WithdrawFormInnerProps {
  balance?: GetAccountBalanceReply;
  shares?: FragmentType<typeof shareFragment>[];
  pool?: FragmentType<typeof splitBaseFragment> | null;
}

export interface WithdrawData {
  assets?: Balance[];
  distribute: boolean;
}

export default function WithdrawFormInner({
  balance,
  children,
  ...props
}: PropsWithChildren<WithdrawFormInnerProps>) {
  const {
    watch,
    formState: { isValid },
  } = useFormContext<WithdrawData>();
  const pool = getFragment(splitBaseFragment, props.pool);

  const assets = watch("assets");
  const distribute = watch("distribute");

  const { ...tx } = useWithdrawSplit(pool?.address, assets);
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
        <SummaryTable distribute={distribute} assets={assets} {...props} />

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
