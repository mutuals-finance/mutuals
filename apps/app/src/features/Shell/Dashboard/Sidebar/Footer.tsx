import { Link, Stack, Text, StackProps } from "@mutuals/ui";
import { siteCopyrightText } from "@/config";

export type ShellDashboardSidebarFooterProps = StackProps;

export default function ShellDashboardSidebarFooter(
  props: ShellDashboardSidebarFooterProps,
) {
  return (
    <Stack gap={"1"} {...props}>
      <Text truncate>
        &copy; {new Date().getFullYear()} {siteCopyrightText}
      </Text>
      <Text truncate>
        <Link href={"/"}>Privacy Policy</Link> /{" "}
        <Link href={"/"}>Terms of Service</Link>
      </Text>
    </Stack>
  );
}
