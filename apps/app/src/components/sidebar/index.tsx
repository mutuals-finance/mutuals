import { SidebarContent } from "./sidebar-content";
import { SidebarFooter } from "./sidebar-footer";
import { SidebarHeader } from "./sidebar-header";
import { SidebarWrapper, type SidebarWrapperProps } from "./sidebar-wrapper";

export { SidebarContent } from "./sidebar-content";
export { SidebarFooter } from "./sidebar-footer";
export { SidebarHeader } from "./sidebar-header";
export { SidebarWrapper, type SidebarWrapperProps } from "./sidebar-wrapper";

export interface SidebarProps extends SidebarWrapperProps {
  footer?: React.ReactNode;
  header?: React.ReactNode;
}

export default function Sidebar({
  header,
  footer,
  children,
  ...props
}: SidebarProps) {
  return (
    <SidebarWrapper {...props}>
      {header && <SidebarHeader>{header}</SidebarHeader>}
      {children && <SidebarContent>{children}</SidebarContent>}
      {footer && <SidebarFooter>{footer}</SidebarFooter>}
    </SidebarWrapper>
  );
}
