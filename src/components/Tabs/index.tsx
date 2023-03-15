import { Tab } from "@headlessui/react";

import { ScrollMenu } from "react-horizontal-scrolling-menu";

export interface TabsProps {
  disabled?: boolean;
}

function Tabs({ children }: React.PropsWithChildren & TabsProps) {
  return <Tab.Group>{children}</Tab.Group>;
}

function Title({
  className,
  children,
}: { className?: string } & React.PropsWithChildren<any>) {
  return (
    <Tab
      className={`relative ui-selected:border-b-4 rounded-t-xl flex items-center justify-center text-center flex-1 py-3 outline-0 ring-0 border-white -mb-px  ${className}`}
    >
      {children}
    </Tab>
  );
}

function Titles({ children }: React.PropsWithChildren<any>) {
  return (
    <Tab.List
      as={() => (
        <ScrollMenu
          wrapperClassName={"border-b border-default"}
          scrollContainerClassName={
            "flex justify-start whitespace-nowrap space-x-6 w-full"
          }
        >
          {children}
        </ScrollMenu>
      )}
    />
  );
}

function Panel({ children }: React.PropsWithChildren<any>) {
  return <Tab.Panel>{children}</Tab.Panel>;
}
function Panels({ children }: React.PropsWithChildren<any>) {
  return <Tab.Panels>{children}</Tab.Panels>;
}

Tabs.Titles = Titles;
Tabs.Title = Title;
Tabs.Panels = Panels;
Tabs.Panel = Panel;

export default Tabs;
