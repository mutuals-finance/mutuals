import React from "react";
import TokenCard from "@/components/TokenCard";
import { TokenValue } from "@/lib/graphql/__generated__/graphql";

interface TokensProps {
  tokens: TokenValue[];
}

export function TokenBalance({ tokens }: TokensProps) {
  return (
    <div className={"relative lg:col-span-6 overflow-hidden"}>
      <div className={"flex space-x-4"}>
        {tokens.map((tokenValue, index) => (
          <TokenCard key={index} tokenValue={tokenValue} />
        ))}
      </div>
    </div>
  );
}
