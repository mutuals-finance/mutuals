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
} from "@/features/shell/dashboard/links";

import { useDashboardRoot } from "@/features/shell/dashboard/root";
import ShellDashboardSidebarFooter from "@/features/shell/dashboard/sidebar/footer";

export default function ShellDashboardSidebarDesktop() {
  const { desktop } = useDashboardRoot();

  return (
    <Stack
      data-state={desktop.open ? "open" : "closed"}
      flex={"0 0 auto"}
      gap={"4"}
      h={"calc(100vh - 4rem)"}
      left="0"
      minW={"5rem"}
      overflow={"hidden"}
      position={"sticky"}
      px={"4"}
      py={"6"}
      separator={<StackSeparator />}
      top="4rem"
      transition="all 0.2s ease"
      w={{
        base: { _open: "60", _closed: "0" },
        "2xl": { _open: "80", _closed: "0" },
      }}
    >
      <Stack flex={"1"}>
        <Stack gap={"6"} mb={"auto"}>
          {Object.keys(sidebarItems).map((section) => (
            <ShellDashboardSidebarDesktopSection
              key={section}
              links={sidebarItems[section]}
              title={section}
            />
          ))}
        </Stack>

        <Group
          alignItems={"center"}
          justifyContent={"center"}
          visibility={desktop.open ? "inherit" : "hidden"}
        >
          {socialLinks.map(({ href, label, icon: LinkIcon, ...props }) => (
            <Link href={href} key={label} {...props} asChild={true}>
              <IconButton aria-label={label} size={"xs"} variant="ghost">
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
      <Text fontWeight={"medium"} textStyle="sm" truncate>
        {title}
      </Text>
      <Stack gap={2} w={"full"}>
        {links?.map(({ value, href, label, icon: LinkIcon, ...props }) => (
          <Link href={href} key={value} {...props} asChild={true}>
            <Button
              fontSize={"sm"}
              gap={"4"}
              justifyContent={"flex-start"}
              overflow={"hidden"}
              px={"0.95rem"}
              size={"xl"}
              textAlign={"left"}
              variant={"outline"}
              w={"full"}
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
