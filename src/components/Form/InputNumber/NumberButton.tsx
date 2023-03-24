import React from 'react';
import { useLongPress } from 'react-use';

import { ButtonOutline } from '@/components/Button';

interface InputNumberButtonProps extends React.HTMLAttributes<HTMLSpanElement> {
  onLongPress: Parameters<typeof useLongPress>[0];
  icon: React.ReactNode;
  disabled?: boolean;
}

export default function NumberButton({
  className,
  onLongPress,
  icon,
  disabled,
}: InputNumberButtonProps) {
  const longPressEvent = useLongPress((e) => !disabled && onLongPress(e), {
    delay: 0,
  });

  return (
    <span className={`text-light ${className}`}>
      <ButtonOutline
        size='sm'
        disabled={disabled}
        icon={icon}
        type={'button'}
        {...longPressEvent}
      />
    </span>
  );
}
