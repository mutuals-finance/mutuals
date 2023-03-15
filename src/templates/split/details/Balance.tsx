import React from "react";
import { ButtonPrimary } from "@/components/Button";
import Box from "@/components/Box";
import Statistic from "@/components/Statistic";
import TokenCard from "@/components/TokenCard";
import { formatCurrency } from "@/lib/utils";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Link from "next/link";
import { useRouter } from "next/router";
import { Balance, GetAccountBalanceReply } from "@ankr.com/ankr.js/dist/types";

function BalanceTokenCards({ assets = [] }: { assets?: Balance[] }) {
  return (
    <ScrollMenu scrollContainerClassName={"space-x-3 px-3 lg:px-6"}>
      {assets.map((token, index) => (
        <TokenCard key={index} {...token} />
      ))}
    </ScrollMenu>
  );
}
type BalanceProps = Partial<GetAccountBalanceReply>;

export function Balance({ totalBalanceUsd = "0", assets = [] }: BalanceProps) {
  const { pathname, query } = useRouter();

  return (
    <Box className={"relative lg:col-span-6 overflow-hidden"}>
      <div className={"space-y-6"}>
        <div
          className={"flex items-center justify-between space-x-3 lg:space-x-6"}
        >
          <Statistic title={"Total Balance"} className={"text-4xl"}>
            {formatCurrency(totalBalanceUsd)}
          </Statistic>
          <Link
            href={{
              pathname,
              query: { id: query.id, withdraw: true },
            }}
            shallow={true}
            replace={true}
            passHref={true}
          >
            <ButtonPrimary>Request Withdrawal</ButtonPrimary>
          </Link>
        </div>
        <div
          className={
            "-ml-3 w-[calc(100%_+_1.5rem)] lg:-ml-6 lg:w-[calc(100%_+_3rem)]"
          }
        >
          <BalanceTokenCards assets={assets} />
        </div>
      </div>
    </Box>
  );
}
