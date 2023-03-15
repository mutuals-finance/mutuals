import { Transition, Dialog } from "@headlessui/react";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";

export interface ModalProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  dense?: boolean;
  open?: boolean | undefined;
  onClose?: (value?: boolean) => void;
}

export default function Modal({
  children,
  header,
  footer,
  dense = false,
  open,
  onClose,
}: React.PropsWithChildren & ModalProps) {
  return (
    <Transition as={React.Fragment} show={open}>
      <Dialog onClose={(value) => onClose?.(value)}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 z-40" />
        </Transition.Child>

        <div className="fixed p-6 flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-screen overflow-hidden z-50">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out-expo duration-300"
            enterFrom="opacity-0 translate-y-3"
            enterTo="opacity-100 translate-y-0"
            leave="ease-in-expo duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-3"
          >
            <Dialog.Panel
              className={
                "relative bg-white rounded-default pointer-events-auto shadow-default flex flex-col w-full max-w-full"
              }
            >
              {(!!header || !!onClose) && (
                <div className="flex bg-default-2 rounded-t-2xl w-full items-center justify-between flex-shrink-0 p-6">
                  {!!header && header}

                  {!!onClose && (
                    <button
                      className="block flex-shrink-0"
                      onClick={() => onClose(false)}
                    >
                      <IoCloseOutline />
                    </button>
                  )}
                </div>
              )}
              <div className={"flex flex-col flex-1 overflow-y-auto p-6"}>
                {children}
              </div>
              <div className="w-full flex flex-col flex-shrink-0">{footer}</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
