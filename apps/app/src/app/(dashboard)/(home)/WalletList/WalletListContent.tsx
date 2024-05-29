import React from "react";

import { ApolloQueryResult, ViewerWalletsQuery } from "@splitfi/sdk";
import KeenSliderSlide from "@/components/KeenSlider/KeenSliderSlide";
import WalletCard from "@/app/(dashboard)/(home)/WalletList/WalletCard";
import KeenSlider from "@/components/KeenSlider/KeenSlider";

interface WalletListContentProps
  extends ApolloQueryResult<ViewerWalletsQuery> {}

export default function WalletListContent({ data }: WalletListContentProps) {
  if (!(data?.viewer && "user" in data.viewer)) {
    return <>error</>;
  }

  const primaryWallet = data.viewer.user?.primaryWallet;
  const wallets = data.viewer.user?.wallets;

  return (
    <KeenSlider
      sx={{ overflow: "visible !important" }}
      options={{
        mode: "free",
        rubberband: false,
        slides: { perView: "auto", spacing: 16 },
      }}
    >
      {wallets?.map((wallet) => (
        <KeenSliderSlide
          key={wallet?.dbid}
          flexShrink={"0"}
          sx={{ w: "xs !important" }}
        >
          <WalletCard
            {...wallet}
            isPrimaryWallet={wallet?.dbid === primaryWallet?.dbid}
          />
        </KeenSliderSlide>
      ))}
    </KeenSlider>
  );
}
