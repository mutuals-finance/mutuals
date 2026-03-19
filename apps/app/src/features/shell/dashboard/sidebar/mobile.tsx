"use client";

import {
  Button,
  CloseButton,
  ColorModeButton,
  Drawer,
  Link,
  type NavLinkProps,
  Portal,
  Stack,
  type StackProps,
  Text,
} from "@mutuals/ui";
import {
  header as headerLinks,
  sidebar as sidebarLinks,
} from "@/features/shell/dashboard/links";
import { useDashboardRoot } from "@/features/shell/dashboard/root";
import ShellDashboardSidebarFooter from "@/features/shell/dashboard/sidebar/footer";

export default function ShellDashboardSidebarMobile() {
  const { mobile } = useDashboardRoot();

  return (
    <Drawer.Root
      initialFocusEl={() => null}
      onOpenChange={(e) => mobile.setOpen(e.open)}
      open={mobile.open}
      placement={"bottom"}
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
                    links={sidebarLinks[section as keyof typeof sidebarLinks]}
                    title={section}
                  />
                ))}
                <ShellDashboardSidebarMobileSection
                  links={headerLinks}
                  title={"Navigate"}
                />
              </Stack>
            </Drawer.Body>

            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>

            <Drawer.Footer
              alignItems={"flex-end"}
              justifyContent={"space-between"}
            >
              <ShellDashboardSidebarFooter textStyle={"2xs"} />

              <ColorModeButton size="sm" variant="outline" />
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
            asChild
            justifyContent={"flex-start"}
            key={link.label}
            size={"sm"}
            textAlign={"left"}
            variant={"ghost"}
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
