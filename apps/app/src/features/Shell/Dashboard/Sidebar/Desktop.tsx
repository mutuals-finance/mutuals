"use client";

import {
  Button,
  Group,
  Icon,
  IconButton,
  Link,
  type NavLinkProps,
  Stack,
  type StackProps,
  StackSeparator,
  Text,
} from "@mutuals/ui";
import {
  sidebar as sidebarItems,
  social as socialLinks,
} from "@/features/Shell/Dashboard/links";

import { useDashboardRoot } from "@/features/Shell/Dashboard/Root";
import ShellDashboardSidebarFooter from "@/features/Shell/Dashboard/Sidebar/Footer";

export default function ShellDashboardSidebarDesktop() {
  const { desktop } = useDashboardRoot();

  return (
    <Stack
      flex={"0 0 auto"}
      data-state={desktop.open ? "open" : "closed"}
      position={"sticky"}
      top="4rem"
      h={"calc(100vh - 4rem)"}
      left="0"
      w={{
        base: { _open: "60", _closed: "0" },
        "2xl": { _open: "80", _closed: "0" },
      }}
      minW={"5rem"}
      overflow={"hidden"}
      gap={"4"}
      px={"4"}
      py={"6"}
      transition="all 0.2s ease"
      separator={<StackSeparator />}
    >
      <Stack flex={"1"}>
        <Stack gap={"6"} mb={"auto"}>
          {Object.keys(sidebarItems).map((section) => (
            <ShellDashboardSidebarDesktopSection
              key={section}
              title={section}
              links={sidebarItems[section]}
            />
          ))}
        </Stack>

        <Group
          alignItems={"center"}
          justifyContent={"center"}
          visibility={desktop.open ? "inherit" : "hidden"}
        >
          {socialLinks.map(({ href, label, icon: LinkIcon, ...props }) => (
            <Link key={label} href={href} {...props} asChild={true}>
              <IconButton size={"xs"} variant="ghost" aria-label={label}>
                <LinkIcon />
              </IconButton>
            </Link>
          ))}
        </Group>
      </Stack>

      <ShellDashboardSidebarFooter
        textAlign={"center"}
        textStyle={"2xs"}
        visibility={desktop.open ? "inherit" : "hidden"}
      />
    </Stack>
  );
}

type ShellDashboardSidebarDesktopSectionProps = {
  title?: string;
  links?: NavLinkProps[];
} & StackProps;

function ShellDashboardSidebarDesktopSection({
  title,
  links,
  ...props
}: ShellDashboardSidebarDesktopSectionProps) {
  return (
    <Stack gap={"2"} {...props}>
      <Text textStyle="sm" fontWeight={"medium"} truncate>
        {title}
      </Text>
      <Stack gap={2} w={"full"}>
        {links?.map(({ value, href, label, icon: LinkIcon, ...props }) => (
          <Link key={value} href={href} {...props} asChild={true}>
            <Button
              variant={"outline"}
              w={"full"}
              justifyContent={"flex-start"}
              px={"0.95rem"}
              gap={"4"}
              size={"xl"}
              fontSize={"sm"}
              textAlign={"left"}
              overflow={"hidden"}
            >
              <Icon boxSize={"4"}>
                <LinkIcon />
              </Icon>
              {label}
            </Button>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
}
