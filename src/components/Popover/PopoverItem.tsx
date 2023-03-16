import React from "react";

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
      className={`flex items-center justify-start rounded-xl space-x-2 px-4 py-2 w-full text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-color ease-out-expo duration-200 active:scale-95 ${
        highlight && `font-semibold`
      } ${className}`}
    >
      {icon}
      <span className={`block`}>{children}</span>
    </button>
  );
}
