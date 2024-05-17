import {
  ChakraProps,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Tr,
} from "@splitfi/ui";
import React from "react";
import { formatCurrencyAmount, formatPrice } from "@/lib/utils";
import {
  FragmentType,
  useFragment as getFragment,
} from "@/lib/graphql/thegraph/__generated__";
import { shareFragment } from "@/lib/graphql/thegraph/fragments";
import { WithdrawData } from "@/app/(dashboard)/pool/[id]/(overview)/withdraw/WithdrawForm/WithdrawFormInner";
import { ChakraStylesConfig } from "chakra-react-select";

export interface SummaryTableProps extends WithdrawData {
  shares?: FragmentType<typeof shareFragment>[];
}

export default function SummaryTable({
  assets,
  distribute,
  ...props
}: SummaryTableProps) {
  const shares = props.shares?.map((s) => getFragment(shareFragment, s));
  const share = shares ? shares[0] : null;

  const total = assets?.reduce(
    (total, asset) => ({
      balance: total.balance + Number(asset?.balanceUsd || "0.00"),
      assetCount: total.assetCount + Number(asset.balance || "0.00"),
    }),
    { balance: 0, assetCount: 0 },
  ) || { balance: 0, assetCount: 0 };

  const userWithdraw = Number(share?.value || "0.00") * total?.balance;

  const rows: Record<string, { value: number; props?: ChakraProps }> = {
    "Total Withdrawal": {
      value: distribute ? total?.balance : userWithdraw,
      props: { border: "none" },
    },
    "Your Withdrawal": {
      value: userWithdraw,
      props: { border: "none" },
    },
    "Withdrawal Fee": { value: 0 },
  };

  return (
    <TableContainer overflow={"hidden"}>
      <Table size="sm">
        <Tbody>
          {Object.keys(rows).map((col) => (
            <Tr key={col}>
              <Td px={"0"} {...rows[col]?.props}>
                {col}
              </Td>
              <Td isNumeric px={"0"} {...rows[col]?.props}>
                {formatPrice(rows[col]?.value.toString() ?? "")}
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Td px={"0"}>
              <Text as="b">You Receive</Text>
            </Td>
            <Td px={"0"} isNumeric>
              <Text as="b">
                {formatPrice(userWithdraw.toString())} (
                {formatCurrencyAmount(total.assetCount.toString())} tokens)
              </Text>
            </Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
