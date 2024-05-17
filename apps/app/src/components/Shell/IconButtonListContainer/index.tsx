"use client";

import KeenSlider from "@/components/KeenSlider/KeenSlider";
import KeenSliderSlide from "@/components/KeenSlider/KeenSliderSlide";
import IconTextButton from "@/components/IconTextButton";
import { Box, BoxProps, IconButtonProps } from "@splitfi/ui";

interface IconButtonListContainerProps extends BoxProps {
  items: IconButtonProps[];
}

export default function IconButtonListContainer({
  children,
  items,
  ...props
}: IconButtonListContainerProps) {
  return (
    <Box overflow={"hidden"} {...props}>
      <KeenSlider
        sx={{ overflow: "visible !important" }}
        options={{
          mode: "free",
          rubberband: false,
          slides: { perView: "auto", spacing: 24 },
        }}
      >
        {items.map((props, i) => (
          <KeenSliderSlide
            key={`${i}-${props["aria-label"]}`}
            flexShrink={"0"}
            sx={{ w: "24 !important" }}
          >
            <IconTextButton {...props} />
          </KeenSliderSlide>
        ))}
      </KeenSlider>
      {children}
    </Box>
  );
}
