import React from 'react';
import { IoAdd, IoClose, IoTrash } from 'react-icons/io5';

import {
  ButtonLink,
  ButtonOutline,
  ButtonSecondary,
} from '@/components/Button';
interface InputFieldArrayItemProps {
  removeDisabled: boolean;
  onAdd?(): void;
  onRemove(): void;
}

export function InputFieldArrayItem({
  children,
  removeDisabled,
  onAdd,
  onRemove,
}: React.PropsWithChildren<InputFieldArrayItemProps>) {
  return (
    <li className={'flex flex-1 items-end space-x-3'}>
      <div className={'flex flex-1 space-x-3'}>{children}</div>
      {!!onAdd && (
        <ButtonOutline
          type={'button'}
          onClick={() => onAdd()}
          icon={<IoAdd />}
        />
      )}
      <ButtonOutline
        disabled={removeDisabled}
        type={'button'}
        onClick={() => onRemove()}
        icon={<IoClose />}
      />
    </li>
  );
}
