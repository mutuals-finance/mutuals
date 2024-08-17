import {
  ChakraProps,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Tr,
} from "@mutuals/ui";
import React, { useMemo } from "react";
import { formatPrice } from "src/utils";
import { type WithdrawData } from "@/features/PoolAction/types";
import { Share } from "@mutuals/graphql-client-nextjs/thegraph";
import { Balance } from "@ankr.com/ankr.js/dist/types";

export interface SummaryTableProps extends WithdrawData {
  shares?: Share[];
  data?: Balance[];
}

export default function SummaryTable({
  assets = {},
  data = [],
  distribute,
  shares,
}: SummaryTableProps) {
  const share = shares ? shares[0] : null;

  const total = useMemo(
    () =>
      Object.keys(assets).reduce(
        (total, index) => {
          const asset = data[Number(index)];

          if (!asset) {
            return { balance: 0, assetCount: 0 };
          }

          return {
            balance: total.balance + Number(asset.balanceUsd),
            assetCount: total.assetCount + Number(asset.balance),
          };
        },
        { balance: 0, assetCount: 0 },
      ),
    [data, assets],
  );

  const userWithdraw = Number(share?.value || "0.00") * total?.balance;

  const rows: Record<string, { value: number; props?: ChakraProps }> = {
    "Total Withdrawal": {
      value: distribute ? total?.balance : userWithdraw,
      props: { border: "none", py: 0 },
    },
    "Mutuals Fee": { value: 0 },
  };

  return (
    <TableContainer overflow={"hidden"}>
      <Table size="sm">
        <Tbody>
          {Object.keys(rows).map((col) => (
            <Tr key={col}>
              <Td px={"0"} {...rows[col]?.props}>
                <Text>{col}</Text>
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
              <Text as={"b"} fontWeight={"500"}>
                Your Withdrawal
              </Text>
            </Td>
            <Td px={"0"} isNumeric>
              <Text as="b" fontWeight={"500"}>
                {formatPrice(userWithdraw.toString())}
              </Text>
            </Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
