import Image from "next/image";
import React from "react";
import { getAccountBalance } from "ankr-react/dist/api";
import { formatBalance, formatCurrency } from "@/lib/utils";
import { IoHelp } from "react-icons/io5";

type TokenCardProps = Awaited<
  ReturnType<typeof getAccountBalance>
>["assets"][0];

export default function TokenCard({
  balance,
  balanceUsd,
  tokenName,
  tokenSymbol,
  thumbnail,
}: TokenCardProps) {
  return (
    <div
      className={
        "flex items-center space-x-3 p-3 flex-shrink-0 overflow-hidden rounded-default bg-default-2"
      }
    >
      <div className={"w-6 h-6 flex flex-shrink-0 items-center bg-transparent"}>
        {thumbnail !== "" ? (
          <Image
            src={thumbnail}
            alt={tokenName}
            width={48}
            height={48}
            className={"w-full flex-1 object-contain self-stretch"}
          />
        ) : (
          <span
            className={
              "flex w-full items-center justify-center self-stretch bg-default-2 rounded-full"
            }
          >
            <IoHelp className={"block"} />
          </span>
        )}
      </div>
      <div className={"flex whitespace-nowrap flex-col"}>
        <h3 className={"text-sm font-bold leading-relaxed"}>
          {tokenSymbol !== "" ? tokenSymbol : "UNKNOWN"}
        </h3>

        <div className={"flex items-center space-x-3 "}>
          <span className={"label text-default font-semibold leading-none"}>
            {formatBalance(balance)}
          </span>
          <span className={"label leading-none"}>
            {formatCurrency(balanceUsd)}
          </span>
        </div>
      </div>
    </div>
  );
}
