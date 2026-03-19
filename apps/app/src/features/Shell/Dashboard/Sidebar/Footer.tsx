import { Link, Stack, type StackProps, Text } from "@mutuals/ui";

export type ShellDashboardSidebarFooterProps = StackProps;

export default function ShellDashboardSidebarFooter(
  props: ShellDashboardSidebarFooterProps
) {
  return (
    <Stack gap={"2"} {...props}>
      <Stack gap={"1"}>
        <Text truncate>&copy; {new Date().getFullYear()} Mutuals Finance</Text>
        <Text truncate>
          <Link fontWeight={"normal"} href={"/"}>
            Privacy Policy
          </Link>{" "}
          /{" "}
          <Link fontWeight={"normal"} href={"/"}>
            Terms of Service
          </Link>
        </Text>
      </Stack>
    </Stack>
  );
}
