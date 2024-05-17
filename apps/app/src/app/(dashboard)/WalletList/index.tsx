import { Box, Container, Heading } from "@splitfi/ui";
import React from "react";

import WalletCard from "./WalletCard";
import KeenSlider from "@/components/KeenSlider/KeenSlider";
import KeenSliderSlide from "@/components/KeenSlider/KeenSliderSlide";

export default function WalletList() {
  return (
    <Box overflow={"hidden"} my={"12"}>
      <Container variant={"shell"} my={"0"}>
        <Heading as={"h2"} size={"lg"} mb={"6"}>
          Wallets
        </Heading>

        <KeenSlider
          sx={{ overflow: "visible !important" }}
          options={{
            mode: "free",
            rubberband: false,
            slides: { perView: "auto", spacing: 16 },
          }}
        >
          {[1, 2, 3, 4].map((key) => (
            <KeenSliderSlide
              key={key}
              flexShrink={"0"}
              sx={{ w: "xs !important" }}
            >
              <WalletCard />
            </KeenSliderSlide>
          ))}
        </KeenSlider>
      </Container>
    </Box>
  );
}
