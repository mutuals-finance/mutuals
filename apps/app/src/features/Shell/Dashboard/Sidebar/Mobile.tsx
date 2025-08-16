"use client";

import {
  Drawer,
  Portal,
  Stack,
  Text,
  Link,
  Button,
  CloseButton,
  StackProps,
  ColorModeButton,
  NavLinkProps,
} from "@mutuals/ui";
import ShellDashboardSidebarFooter from "@/features/Shell/Dashboard/Sidebar/Footer";
import {
  sidebar as sidebarLinks,
  header as headerLinks,
} from "@/features/Shell/Dashboard/links";
import { useDashboardRoot } from "@/features/Shell/Dashboard/Root";

export default function ShellDashboardSidebarMobile() {
  const { mobile } = useDashboardRoot();

  return (
    <Drawer.Root
      placement={"bottom"}
      open={mobile.open}
      onOpenChange={(e) => mobile.setOpen(e.open)}
      size={"lg"}
    >
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content roundedTop={"l3"}>
            <Drawer.Body>
              <Stack gap={"4"} py={"4"}>
                {Object.keys(sidebarLinks).map((section) => (
                  <ShellDashboardSidebarMobileSection
                    key={section}
                    title={section}
                    links={sidebarLinks[section as keyof typeof sidebarLinks]}
                  />
                ))}
                <ShellDashboardSidebarMobileSection
                  title={"Navigate"}
                  links={headerLinks}
                />
              </Stack>
            </Drawer.Body>

            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>

            <Drawer.Footer
              justifyContent={"space-between"}
              alignItems={"flex-end"}
            >
              <ShellDashboardSidebarFooter textStyle={"2xs"} />

              <ColorModeButton variant="outline" size="sm" />
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}

type ShellDashboardSidebarMobileSectionProps = {
  title?: string;
  links?: NavLinkProps[];
} & StackProps;

function ShellDashboardSidebarMobileSection({
  title,
  links,
  ...props
}: ShellDashboardSidebarMobileSectionProps) {
  return (
    <Stack gap={"2"} {...props}>
      <Text textStyle={"xs"} variant={"subtag"}>
        {title}
      </Text>
      <Stack gap={0.5} w={"full"}>
        {links?.map((link) => (
          <Button
            key={link.label}
            asChild
            variant={"ghost"}
            size={"sm"}
            justifyContent={"flex-start"}
            textAlign={"left"}
          >
            <Link href={link.href}>
              <link.icon />
              {link.label}
            </Link>
          </Button>
        ))}
      </Stack>
    </Stack>
  );
}
