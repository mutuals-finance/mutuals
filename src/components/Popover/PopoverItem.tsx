import React from 'react';

import clsxm from '@/lib/utils/clsxm';

interface PopoverItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  highlight?: boolean;
  onClick?: (...args: unknown[]) => void;
  className?: string;
}

export default function PopoverItem({
  icon,
  children,
  highlight,
  onClick,
  className,
}: PopoverItemProps) {
  return (
    <button
      onClick={onClick}
      className={clsxm(
        `transition-color ease-out-expo rounded-default hover:bg-default-2 flex w-full items-center justify-start space-x-2 px-4 py-2 text-left text-sm duration-200 active:scale-95`,
        className,
        highlight && `font-semibold`
      )}
    >
      {icon}
      <span className={`block`}>{children}</span>
    </button>
  );
}
