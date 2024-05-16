import type { BoxProps } from "@splitfi/ui";
import { Box } from "@splitfi/ui";
import type { KeenSliderOptions, KeenSliderPlugin } from "keen-slider/react";
import { useKeenSlider } from "keen-slider/react";

interface KeenSliderProps extends BoxProps {
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
  const [sliderRef] = useKeenSlider(options, plugins);

  return (
    <Box
      ref={sliderRef}
      className={`keen-slider ${className}`}
      cursor="grab"
      _active={{ cursor: "grabbing", ..._active }}
      {...props}
    >
      {children}
    </Box>
  );
}
