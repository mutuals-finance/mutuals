import React from 'react';
import { IoAdd, IoTrash } from 'react-icons/io5';

import { ButtonOutline } from '@/components/Button';

interface FormListItemProps {
  removeDisabled: boolean;
  onAdd(): void;
  onRemove(): void;
}

export function FormListItem({
  children,
  removeDisabled,
  onAdd,
  onRemove,
}: React.PropsWithChildren<FormListItemProps>) {
  return (
    <li className={'flex flex-1 items-end space-x-2'}>
      <div className={'flex flex-1 space-x-2'}>{children}</div>
      <ButtonOutline type={'button'} onClick={() => onAdd()} icon={<IoAdd />} />
      <ButtonOutline
        disabled={removeDisabled}
        type={'button'}
        onClick={() => onRemove()}
        icon={<IoTrash />}
      />
    </li>
  );
}

interface FormListProps<T> {
  value: T[];
  error?: string;
  onAdd: (index: number) => void;
  onRemove: (index: number, item: T) => void;
  children: (state: { index: number; item: T }) => React.ReactNode;
}

export default function FormList<T>({
  value,
  onAdd,
  onRemove,
  children,
}: FormListProps<T>) {
  return (
    <ul className={'flex flex-col space-y-2'}>
      {value.map((item, index) => (
        <FormListItem
          key={index}
          removeDisabled={value.length <= 1}
          onAdd={() => onAdd(index)}
          onRemove={() => onRemove(index, item)}
        >
          {children({ item, index })}
        </FormListItem>
      ))}
    </ul>
  );
}
