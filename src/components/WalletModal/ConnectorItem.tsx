import React from 'react';

import { ButtonOutline } from '@/components/Button';

interface ConnectorItemProps {
  name: string;
  ready: boolean;
  isPending: boolean;
  onClick: () => void;
}

export default function ConnectorItem({
  name,
  ready,
  isPending,
  onClick,
}: ConnectorItemProps) {
  return (
    <ButtonOutline
      className={'h-14 px-6'}
      onClick={onClick}
      fullWidth={true}
      justify={'start'}
    >
      {name} {!ready && '(unsupported)'}
      {isPending && '(connecting)'}
    </ButtonOutline>
  );
}
