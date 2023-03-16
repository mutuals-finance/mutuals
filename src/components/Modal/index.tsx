import { Transition, Dialog } from '@headlessui/react';
import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

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
  open,
  onClose,
}: React.PropsWithChildren & ModalProps) {
  return (
    <Transition as={React.Fragment} show={open}>
      <Dialog onClose={(value) => onClose?.(value)}>
        <Transition.Child
          as={React.Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 z-40 bg-black/40' />
        </Transition.Child>

        <div className='fixed top-1/2 left-1/2 z-50 flex max-h-screen -translate-x-1/2 -translate-y-1/2 transform overflow-hidden p-6'>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out-expo duration-300'
            enterFrom='opacity-0 translate-y-3'
            enterTo='opacity-100 translate-y-0'
            leave='ease-in-expo duration-200'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-3'
          >
            <Dialog.Panel
              className={
                'rounded-default shadow-default pointer-events-auto relative flex w-full max-w-full flex-col bg-white'
              }
            >
              {(!!header || !!onClose) && (
                <div className='bg-default-2 flex w-full flex-shrink-0 items-center justify-between rounded-t-2xl p-6'>
                  {!!header && header}

                  {!!onClose && (
                    <button
                      className='block flex-shrink-0'
                      onClick={() => onClose(false)}
                    >
                      <IoCloseOutline />
                    </button>
                  )}
                </div>
              )}
              <div className={'flex flex-1 flex-col overflow-y-auto p-6'}>
                {children}
              </div>
              <div className='flex w-full flex-shrink-0 flex-col'>{footer}</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
