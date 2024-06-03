"use client";

import { useViewerWallets } from "@splitfi/sdk/client";
import KeenSliderSlide from "@/components/KeenSlider/KeenSliderSlide";
import WalletCard from "@/app/(dashboard)/(home)/WalletList/WalletCard";
import KeenSlider from "@/components/KeenSlider/KeenSlider";

interface WalletListContentProps {}

export default function WalletListContent({}: WalletListContentProps) {
  const { data } = useViewerWallets({});
  if (data?.viewer && "user" in data.viewer) {
    const primaryWallet = data.viewer.user?.primaryWallet;
    return (
      <KeenSlider
        sx={{ overflow: "visible !important" }}
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
            sx={{ w: "xs !important" }}
          >
            <WalletCard
              {...wallet}
              isPrimaryWallet={primaryWallet?.dbid === wallet?.dbid}
            />
          </KeenSliderSlide>
        ))}
      </KeenSlider>
    );
  }

  return <>No data</>;
}
