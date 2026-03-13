import { Text, TextProps } from "@mutuals/ui";
import { format, FormatOptions, fromUnixTime, parseISO } from "date-fns";

interface DateProps extends TextProps {
  timestamp: string | number | Date;
  formatString?: string;
  options?: FormatOptions;
}

export default function FormatDate({
  timestamp,
  formatString = "LLLL d, yyyy",
  options,
  ...props
}: DateProps) {
  let date: Date;

  if (timestamp instanceof Date) {
    date = timestamp;
  } else if (typeof timestamp === "string" && timestamp.includes("T")) {
    date = parseISO(timestamp);
  } else {
    const num = Number(timestamp);
    date = num > 9999999999 ? new Date(num) : fromUnixTime(num);
  }

  if (isNaN(date.getTime())) {
    return <Text {...props}>Invalid Date</Text>;
  }

  return (
    <Text asChild {...props}>
      <time dateTime={date.toJSON()}>
        {format(date, formatString, options)}
      </time>
    </Text>
  );
}
