import { Switch } from '@headlessui/react';
import React from 'react';
import { IoCheckmark, IoClose } from 'react-icons/io5';

type InputSwitchProps = {
  label?: string;
  className?: string;
} & {
  checked?: boolean | undefined;
  defaultChecked?: boolean | undefined;
  onChange?(checked: boolean): void;
  name?: string | undefined;
  value?: string | undefined;
};

export default function InputSwitch({
  label,
  className = '',
  checked,
  ...props
}: InputSwitchProps) {
  return (
    <Switch.Group>
      <div className={`flex flex-col ${className}`}>
        {!!label && <Switch.Label className='label mb-1'>{label}</Switch.Label>}
        <Switch
          checked={checked}
          className={`${
            checked ? '!bg-carlo' : 'border-default border'
          } relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-0`}
          {...props}
        >
          <span
            className={`${
              checked
                ? 'translate-x-7 bg-white text-neutral-900'
                : 'translate-x-1 bg-neutral-900 text-neutral-50'
            } inline-flex h-4 w-4 transform items-center justify-center rounded-full text-xs transition-transform`}
          >
            {checked ? <IoCheckmark /> : <IoClose />}
          </span>
        </Switch>
      </div>
    </Switch.Group>
  );
}
