"use client";

import KeenSlider from "@/components/KeenSlider/KeenSlider";
import KeenSliderSlide from "@/components/KeenSlider/KeenSliderSlide";
import IconTextButton from "@/components/IconTextButton";
import { Box, BoxProps, IconButtonProps } from "@mutuals/ui";

interface ShellIconButtonListProps extends BoxProps {
  items: IconButtonProps[];
}

export default function ShellIconButtonList({
  children,
  items,
  ...props
}: ShellIconButtonListProps) {
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
