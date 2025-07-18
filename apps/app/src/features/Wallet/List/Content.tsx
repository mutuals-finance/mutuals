"use client";

import { useViewerWallets } from "@mutuals/graphql-client-nextjs/client";
import KeenSliderSlide from "@/components/KeenSlider/KeenSliderSlide";
import WalletCard from "@/features/Wallet/Card";
import KeenSlider from "@/components/KeenSlider/KeenSlider";

interface WalletListContentProps {}

export default function WalletListContent(_: WalletListContentProps) {
  const { data } = useViewerWallets({});

  if (data?.viewer && "user" in data.viewer) {
    const primaryWallet = data.viewer.user?.primaryWallet;
    return (
      <KeenSlider
        css={{ overflow: "visible !important" }}
        options={{
          mode: "free",
          rubberband: false,
          slides: { perView: "auto", spacing: 16 },
        }}
      >
        {data.viewer.user?.wallets?.map((wallet) => (
          <KeenSliderSlide
            key={wallet?.dbid}
            flexShrink={"0"}
            css={{ w: "2xs !important" }}
          >
            <WalletCard
              {...wallet}
              w={"full"}
              isPrimaryWallet={primaryWallet?.dbid === wallet?.dbid}
            />
          </KeenSliderSlide>
        ))}
      </KeenSlider>
    );
  }

  return <>No data</>;
}
