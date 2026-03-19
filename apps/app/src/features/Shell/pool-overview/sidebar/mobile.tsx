import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  type DrawerRootProps,
  DrawerTitle,
} from "@mutuals/ui";

export type ShellPoolOverviewSidebarMobileProps = DrawerRootProps;

export default function ShellPoolOverviewSidebarMobile({
  children,
  ...props
}: ShellPoolOverviewSidebarMobileProps) {
  return (
    <DrawerRoot placement={"bottom"} size={"full"} {...props}>
      <DrawerBackdrop />
      <DrawerContent
        display={"flex"}
        flex={"1"}
        flexDirection="column"
        maxHeight={"calc(100dvh - var(--chakra-sizes-16))"}
        overflow={"hidden"}
        roundedTop={"l3"}
      >
        <DrawerCloseTrigger />
        <DrawerHeader flexShrink={"0"}>
          <DrawerTitle>Manage Funds</DrawerTitle>
        </DrawerHeader>

        <DrawerBody
          display={"flex"}
          flex={"1"}
          flexDirection={"column"}
          px={"0"}
        >
          {children}
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
}
