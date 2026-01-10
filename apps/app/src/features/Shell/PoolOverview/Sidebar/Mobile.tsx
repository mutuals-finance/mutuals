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
    <DrawerRoot size={"lg"} {...props}>
      <DrawerBackdrop />
      <DrawerContent
        display={"flex"}
        flexDirection="column"
        roundedTop={"xl"}
        flex={"1"}
        overflow={"hidden"}
      >
        <DrawerCloseTrigger />
        <DrawerHeader flexShrink={"0"}>
          <DrawerTitle>Manage Funds</DrawerTitle>
        </DrawerHeader>

        <DrawerBody p={"0"} flex={"1"}>
          {children}
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
}
