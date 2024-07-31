import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
} from "@mutuals/ui";

export type ShellPoolOverviewSidebarMobileProps = DrawerProps;

export default function ShellPoolOverviewSidebarMobile({
  children,
  ...props
}: ShellPoolOverviewSidebarMobileProps) {
  return (
    <Drawer {...props} size={"lg"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Manage Funds</DrawerHeader>

        <DrawerBody p={"0"} flex={"1"}>
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
