import { Text, TextProps } from "@chakra-ui/react";
import { format, FormatOptions, fromUnixTime } from "date-fns";

interface DateProps extends TextProps {
  timestamp: string;
  formatString?: string;
  options?: FormatOptions;
}
export default function Date({
  timestamp,
  formatString = "LLLL d, yyyy",
  options,
  ...props
}: DateProps) {
  const date = fromUnixTime(Number(timestamp));
  return (
    <Text as={"time"} dateTime={date.toJSON()} {...props}>
      {format(date, formatString, options)}
    </Text>
  );
}
