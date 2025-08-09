import { Text, TextProps } from "@mutuals/ui";
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
    <Text asChild {...props}>
      <time dateTime={date.toJSON()}>
        {format(date, formatString, options)}
      </time>
    </Text>
  );
}
