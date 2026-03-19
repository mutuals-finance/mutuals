import { Text, type TextProps } from "@mutuals/ui";
import { type FormatOptions, format, fromUnixTime, parseISO } from "date-fns";

interface DateProps extends TextProps {
  formatString?: string;
  options?: FormatOptions;
  timestamp: string | number | Date;
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
    date = num > 9_999_999_999 ? new Date(num) : fromUnixTime(num);
  }

  if (Number.isNaN(date.getTime())) {
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
