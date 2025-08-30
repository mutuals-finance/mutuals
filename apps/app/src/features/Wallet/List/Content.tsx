"use client";

import KeenSliderSlide from "@/components/KeenSlider/KeenSliderSlide";
import WalletCard from "@/features/Wallet/Card";
import KeenSlider from "@/components/KeenSlider/KeenSlider";

interface WalletListContentProps {}

export default function WalletListContent(_: WalletListContentProps) {
  const wallets: any[] = [];

  return (
    <KeenSlider
      css={{ overflow: "visible !important" }}
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
          css={{ w: "2xs !important" }}
        >
          <WalletCard {...wallet} w={"full"} isPrimaryWallet={false} />
        </KeenSliderSlide>
      ))}
    </KeenSlider>
  );
}
