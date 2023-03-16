import { Transition, Dialog } from '@headlessui/react';
import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

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
          enter='ease-out duration-200'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-out duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 z-40 bg-black/50' />
        </Transition.Child>

        <Transition.Child
          as={React.Fragment}
          enter='ease-out duration-200'
          enterFrom='translate-x-full'
          enterTo='translate-x-0'
          leave='ease-out duration-200'
          leaveFrom='translate-x-0'
          leaveTo='translate-x-full'
        >
          <div className='fixed top-0 right-0 z-50 flex h-screen overflow-hidden'>
            <Dialog.Panel
              className={
                'bg-default shadow-default pointer-events-auto relative flex w-full max-w-full flex-col'
              }
            >
              {(!!header || !!onClose) && (
                <div className='bg-default-2 flex w-full flex-shrink-0 items-center justify-between'>
                  {!!header && header}

                  {!!onClose && (
                    <button
                      className='mr-6 block flex-shrink-0'
                      onClick={() => onClose(false)}
                    >
                      <IoCloseOutline />
                    </button>
                  )}
                </div>
              )}
              <div className={'flex flex-1 flex-col overflow-y-auto'}>
                {children}
              </div>
              <div className='flex w-full flex-shrink-0 flex-col'>{footer}</div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
