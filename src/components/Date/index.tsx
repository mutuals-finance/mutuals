import { format, fromUnixTime } from 'date-fns';
import { HTMLAttributes } from 'react';

interface DateProps extends HTMLAttributes<HTMLTimeElement> {
  timestamp: string;
  formatString?: string;
  options?: {
    locale?: Locale;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    firstWeekContainsDate?: number;
    useAdditionalWeekYearTokens?: boolean;
    useAdditionalDayOfYearTokens?: boolean;
  };
}
export default function Date({
  timestamp,
  formatString = 'LLLL d, yyyy',
  options,
  ...props
}: DateProps) {
  const date = fromUnixTime(Number(timestamp));
  return (
    <time dateTime={date.toJSON()} {...props}>
      {format(date, formatString, options)}
    </time>
  );
}
