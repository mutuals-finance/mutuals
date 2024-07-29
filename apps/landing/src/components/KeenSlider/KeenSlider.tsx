import type { BoxProps } from "@mutuals/ui";
import { Box } from "@mutuals/ui";
import type { KeenSliderOptions, KeenSliderPlugin } from "keen-slider/react";
import { useKeenSlider } from "keen-slider/react";

export interface KeenSliderProps extends BoxProps {
  options?: KeenSliderOptions;
  plugins?: KeenSliderPlugin[];
}

export default function KeenSlider({
  className,
  children,
  _active,
  options,
  plugins,
  ...props
}: KeenSliderProps) {
  const [sliderRef, { current }] = useKeenSlider(options, plugins);

  return (
    <Box
      ref={sliderRef}
      className={`keen-slider ${className}`}
      cursor={current?.options.drag ? "grab" : "default"}
      _active={{
        cursor: current?.options.drag ? "grabbing" : "default",
        ..._active,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
