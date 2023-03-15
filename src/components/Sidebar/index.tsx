import { Transition, Dialog } from "@headlessui/react";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";

export interface SidebarProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  open?: boolean | undefined;
  onClose?: (value?: boolean) => void;
}

export default function Sidebar({
  children,
  header,
  footer,
  open,
  onClose,
}: React.PropsWithChildren & SidebarProps) {
  return (
    <Transition as={React.Fragment} show={open}>
      <Dialog onClose={(value) => onClose?.(value)}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 z-40" />
        </Transition.Child>

        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-200"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="ease-out duration-200"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="fixed flex top-0 right-0 h-screen overflow-hidden z-50">
            <Dialog.Panel
              className={
                "relative bg-default pointer-events-auto shadow-default flex flex-col w-full max-w-full"
              }
            >
              {(!!header || !!onClose) && (
                <div className="flex bg-default-2 w-full items-center justify-between flex-shrink-0">
                  {!!header && header}

                  {!!onClose && (
                    <button
                      className="block flex-shrink-0 mr-6"
                      onClick={() => onClose(false)}
                    >
                      <IoCloseOutline />
                    </button>
                  )}
                </div>
              )}
              <div className={"flex flex-col flex-1 overflow-y-auto"}>
                {children}
              </div>
              <div className="w-full flex flex-col flex-shrink-0">{footer}</div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
