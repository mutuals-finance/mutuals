import { Popover as PopoverPrimitive, Transition } from "@headlessui/react";
import React from "react";

interface PopoverProps {
  button: React.ReactNode;
  children: React.ReactNode;
}

export default function Popover({ button, children }: PopoverProps) {
  return (
    <PopoverPrimitive className="relative">
      <PopoverPrimitive.Button as={`div`}>{button}</PopoverPrimitive.Button>

      <Transition
        as="div"
        enter="ease-out-expo duration-100"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="ease-in-expo duration-100"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <PopoverPrimitive.Panel className="absolute pt-6 bottom-0 right-0 transform translate-y-full">
          {children}
        </PopoverPrimitive.Panel>
      </Transition>
    </PopoverPrimitive>
  );
}
