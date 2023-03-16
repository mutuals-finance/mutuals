import { Tab } from '@headlessui/react';
import { PropsOf } from '@headlessui/react/dist/types';
import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

export interface TabsProps {
  disabled?: boolean;
}

function Tabs({ children }: React.PropsWithChildren & TabsProps) {
  return <Tab.Group>{children}</Tab.Group>;
}

function Title({
  className,
  children,
}: { className?: string } & React.PropsWithChildren) {
  return (
    <Tab
      className={`relative -mb-px flex flex-1 items-center justify-center rounded-t-xl border-white py-3 text-center outline-0 ring-0 ui-selected:border-b-4  ${className}`}
    >
      {children}
    </Tab>
  );
}

function Titles({
  children,
  wrapperClassName,
  scrollContainerClassName,
  ...props
}: PropsOf<typeof ScrollMenu>) {
  return (
    <Tab.List
      as={() => (
        <ScrollMenu
          wrapperClassName={`border-b border-default ${wrapperClassName}`}
          scrollContainerClassName={`flex justify-start whitespace-nowrap space-x-6 w-full ${scrollContainerClassName}`}
          {...props}
        >
          {children}
        </ScrollMenu>
      )}
    />
  );
}

function Panel({ children }: React.PropsWithChildren) {
  return <Tab.Panel>{children}</Tab.Panel>;
}
function Panels({ children }: React.PropsWithChildren) {
  return <Tab.Panels>{children}</Tab.Panels>;
}

Tabs.Titles = Titles;
Tabs.Title = Title;
Tabs.Panels = Panels;
Tabs.Panel = Panel;

export default Tabs;
