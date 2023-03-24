import { useState } from 'react';
import { NumberFormatValues } from 'react-number-format';

import { formatRoundNumber } from '@/lib/utils';

const DEFAULT_FORMAT_VALUES = {
  value: '0',
  floatValue: 0.0,
  formattedValue: '0',
};

export default function useFormatValues(
  value: string,
  { decimalScale, step }: { decimalScale: number; step: string | number }
) {
  const [current, setFormatValues] = useState<NumberFormatValues>(
    DEFAULT_FORMAT_VALUES
  );

  const merge = (s: number) => {
    const floatValue = formatRoundNumber(Number(value) + s * Number(step), {
      decimal: decimalScale,
    });
    return {
      ...current,
      floatValue,
      value: floatValue.toFixed(decimalScale),
    };
  };

  const prev = merge(-1);
  const next = merge(1);

  return { formatValues: { prev, next, current }, setFormatValues };
}
