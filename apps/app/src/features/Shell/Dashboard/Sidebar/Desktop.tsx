import {
  Icon,
  LinkButton,
  Stack,
  StackProps,
  StackSeparator,
  Text,
} from "@mutuals/ui";
import {
  NavItem,
  sidebar as sidebarItems,
} from "@/features/Shell/Dashboard/links";
import ShellDashboardSidebarFooter from "@/features/Shell/Dashboard/Sidebar/Footer";
import { useDashboardRoot } from "@/features/Shell/Dashboard/Root";

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
      w={{ _open: "60", _closed: "0" }}
      minW={"5rem"}
      overflow={"hidden"}
      gap={"4"}
      p={"4"}
      transition="all 0.2s ease"
      separator={<StackSeparator />}
    >
      <Stack gap={"4"} mb={"auto"}>
        {Object.keys(sidebarItems).map((section) => (
          <ShellDashboardSidebarDesktopSection
            key={section}
            title={section}
            links={sidebarItems[section]}
          />
        ))}
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
  links?: NavItem[];
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
        {links?.map((link) => (
          <LinkButton
            key={link.value}
            href={link.href}
            variant={"outline"}
            w={"full"}
            justifyContent={"flex-start"}
            px={"0.95rem"}
            gap={"4"}
            size={"lg"}
            fontSize={"sm"}
            textAlign={"left"}
            overflow={"hidden"}
          >
            <Icon boxSize={"4"}>
              <link.icon />
            </Icon>
            {link.label}
          </LinkButton>
        ))}
      </Stack>
    </Stack>
  );
}
