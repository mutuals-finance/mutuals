"use client";

import KeenSlider from "@/components/KeenSlider/KeenSlider";
import KeenSliderSlide from "@/components/KeenSlider/KeenSliderSlide";
import IconTextButton, {
  IconTextButtonProps,
} from "@/components/IconTextButton";
import { Box, BoxProps } from "@mutuals/ui";

interface ShellIconButtonListProps extends BoxProps {
  items: IconTextButtonProps[];
}

export default function ShellIconButtonList({
  children,
  items,
  ...props
}: ShellIconButtonListProps) {
  return (
    <Box overflow={"hidden"} {...props}>
      <KeenSlider
        css={{ overflow: "visible !important" }}
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
            css={{ w: "24 !important" }}
          >
            <IconTextButton {...props} />
          </KeenSliderSlide>
        ))}
      </KeenSlider>
      {children}
    </Box>
  );
}
