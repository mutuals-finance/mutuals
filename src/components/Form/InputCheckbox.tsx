import { Switch } from "@headlessui/react";
import React from "react";
import { IoCheckmark } from "react-icons/io5";

type InputCheckboxProps = {
  label?: string;
  className?: string;
} & {
  checked?: boolean | undefined;
  defaultChecked?: boolean | undefined;
  onChange?(checked: boolean): void;
  name?: string | undefined;
  value?: string | undefined;
};

export default function InputCheckbox({
  label,
  className = "",
  checked,
  ...props
}: InputCheckboxProps) {
  return (
    <Switch.Group>
      <div className={`flex flex-col ${className}`}>
        {!!label && <Switch.Label className="label mb-1">{label}</Switch.Label>}
        <Switch
          checked={checked}
          className={`border relative inline-flex h-5 w-5 items-center justify-center rounded-md text-sm transition-colors bg-default border-default text-default focus:outline-none focus:ring-0`}
          {...props}
        >
          {checked && (
            <span className={`block`}>
              <IoCheckmark />
            </span>
          )}
        </Switch>
      </div>
    </Switch.Group>
  );
}
