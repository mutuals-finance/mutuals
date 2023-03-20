import React from 'react';
import { IoAdd, IoTrash } from 'react-icons/io5';

import { ButtonOutline } from '@/components/Button';

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
    <li className={'flex flex-1 items-end space-x-2'}>
      <div className={'flex flex-1 space-x-2'}>{children}</div>
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
        icon={<IoTrash />}
      />
    </li>
  );
}
