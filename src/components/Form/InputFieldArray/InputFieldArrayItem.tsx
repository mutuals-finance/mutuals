import React from 'react';
import { IoAdd, IoTrashOutline } from 'react-icons/io5';

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
    <li className={'flex flex-1 items-end space-x-3'}>
      <div className={'flex flex-1 space-x-3'}>{children}</div>
      <div className={'flex items-center space-x-1.5'}>
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
          icon={<IoTrashOutline />}
        />
      </div>
    </li>
  );
}
