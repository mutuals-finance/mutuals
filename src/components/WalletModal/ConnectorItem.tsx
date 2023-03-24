import React from 'react';

interface ConnectorItemProps {
  name: string;
  ready: boolean;
  isPending: boolean;
  onClick: () => void;
}

const ConnectorItemName = ({ children }: React.PropsWithChildren) => {
  return <span className='text-default block font-semibold'>{children}</span>;
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
      className='border-default transition-color flex h-14 w-full items-center justify-between rounded-xl border border bg-neutral-100 p-4 duration-200 ease-in-out hover:border-stone-400 dark:bg-neutral-800 dark:hover:border-stone-500'
    >
      <ConnectorItemName>
        {name} {!ready && '(unsupported)'}
        {isPending && '(connecting)'}
      </ConnectorItemName>
    </button>
  );
}
