import * as React from 'react';
import { IoImage } from 'react-icons/io5';

import { InputDefaultProps } from '../types';

type FilePlaceholderProps = {
  placeholder: InputDefaultProps['placeholder'];
};

export default function FilePlaceholder({ placeholder }: FilePlaceholderProps) {
  return (
    <div
      className={
        'pointer-events-none relative flex w-full flex-1 flex-col items-center justify-center p-6 text-center'
      }
    >
      <div className={'absolute bottom-0 right-0 p-3 opacity-50'}>
        <IoImage className={'text-xl text-neutral-500 dark:text-neutral-400'} />
      </div>

      {!!placeholder && (
        <div className={'text-neutral-400 dark:text-neutral-500'}>
          <p>{placeholder}</p>
        </div>
      )}
    </div>
  );
}
