import { Link, Stack, Text, StackProps } from "@mutuals/ui";

export type ShellDashboardSidebarFooterProps = StackProps;

export default function ShellDashboardSidebarFooter(
  props: ShellDashboardSidebarFooterProps,
) {
  return (
    <Stack gap={"2"} {...props}>
      <Stack gap={"1"}>
        <Text truncate>&copy; {new Date().getFullYear()} Mutuals Finance</Text>
        <Text truncate>
          <Link href={"/"} fontWeight={"normal"}>
            Privacy Policy
          </Link>{" "}
          /{" "}
          <Link href={"/"} fontWeight={"normal"}>
            Terms of Service
          </Link>
        </Text>
      </Stack>
    </Stack>
  );
}
