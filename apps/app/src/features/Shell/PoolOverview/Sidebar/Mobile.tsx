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
    <DrawerRoot size={"full"} placement={"bottom"} {...props}>
      <DrawerBackdrop />
      <DrawerContent
        display={"flex"}
        flexDirection="column"
        roundedTop={"l3"}
        flex={"1"}
        overflow={"hidden"}
        maxHeight={"calc(100dvh - var(--chakra-sizes-16))"}
      >
        <DrawerCloseTrigger />
        <DrawerHeader flexShrink={"0"}>
          <DrawerTitle>Manage Funds</DrawerTitle>
        </DrawerHeader>

        <DrawerBody
          px={"0"}
          flex={"1"}
          display={"flex"}
          flexDirection={"column"}
        >
          {children}
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
}
