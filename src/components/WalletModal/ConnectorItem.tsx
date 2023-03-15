import React from "react";

interface ConnectorItemProps {
  name: string;
  ready: boolean;
  isPending: boolean;
  onClick: () => void;
}

const ConnectorItemName = ({ children }: React.PropsWithChildren) => {
  return <span className="block text-default font-semibold">{children}</span>;
};

export default function ConnectorItem({
  name,
  ready,
  isPending,
  onClick,
}: ConnectorItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full h-14 p-4 bg-neutral-100 dark:bg-neutral-800 border border border-default hover:border-stone-400 dark:hover:border-stone-500 rounded-xl transition-color ease-in-out duration-200"
    >
      <ConnectorItemName>
        {name} {!ready && "(unsupported)"}
        {isPending && "(connecting)"}
      </ConnectorItemName>
    </button>
  );
}
