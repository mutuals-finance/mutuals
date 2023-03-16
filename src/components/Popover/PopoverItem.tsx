import React from 'react';

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
      className={`transition-color ease-out-expo flex w-full items-center justify-start space-x-2 rounded-xl px-4 py-2 text-left text-sm duration-200 hover:bg-gray-100 active:scale-95 dark:hover:bg-gray-800 ${
        highlight && `font-semibold`
      } ${className}`}
    >
      {icon}
      <span className={`block`}>{children}</span>
    </button>
  );
}
