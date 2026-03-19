import { Box, type BoxProps } from "@chakra-ui/react";
import { type FormatOptions, format, fromUnixTime } from "date-fns";

export type DateTimeProps = BoxProps & {
  timestamp?: string;
  formatString?: string;
  options?: FormatOptions;
};

export function DateTime({
  timestamp = "",
  formatString = "LLLL d, yyyy",
  options,
  ...props
}: DateTimeProps) {
  const _date = fromUnixTime(Number(timestamp));
  return (
    <Box as="time" date-time={timestamp} {...props}>
      {format(timestamp, formatString, options)}
    </Box>
  );
}
