import {
  DrawerRootProps,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerCloseTrigger,
  DrawerTitle,
} from "@mutuals/ui";

export type ShellPoolOverviewSidebarMobileProps = DrawerRootProps;

export default function ShellPoolOverviewSidebarMobile({
  children,
  ...props
}: ShellPoolOverviewSidebarMobileProps) {
  return (
    <DrawerRoot {...props} size={"lg"}>
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerCloseTrigger />
        <DrawerHeader>
          <DrawerTitle>Manage Funds</DrawerTitle>
        </DrawerHeader>

        <DrawerBody p={"0"} flex={"1"}>
          {children}
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
}
