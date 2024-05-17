"use client";

import type { BoxProps } from "@splitfi/ui";
import { Box } from "@splitfi/ui";
import type {
  KeenSliderInstance,
  KeenSliderOptions,
  KeenSliderPlugin,
} from "keen-slider/react";
import { SliderOptions, useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";

interface KeenSliderProps extends BoxProps {
  options?: KeenSliderOptions;
  plugins?: KeenSliderPlugin[];
}

export default function KeenSlider({
  className = "",
  children,
  _active,
  options,
  plugins,
  ...props
}: KeenSliderProps) {
  const [cursor, setCursor] = useState("initial");
  const onDetailsChanged = function (slider: KeenSliderInstance) {
    options?.detailsChanged?.(slider);
    const slidesLength = slider.track.details.slidesLength ?? 0;
    const isOverflow = slidesLength > 1;
    const newCursor = isOverflow ? "grab" : "default";
    cursor !== newCursor && setCursor(newCursor);
  };

  const [sliderRef] = useKeenSlider(
    { ...options, detailsChanged: onDetailsChanged },
    plugins,
  );

  const cursorActive = cursor === "grab" ? "grabbing" : "default";

  return (
    <Box
      ref={sliderRef}
      className={`keen-slider ${className}`}
      cursor={cursor}
      _active={{ cursor: cursorActive, ..._active }}
      {...props}
    >
      {children}
    </Box>
  );
}
