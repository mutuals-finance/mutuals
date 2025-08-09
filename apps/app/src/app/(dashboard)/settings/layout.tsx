import { PropsWithChildren } from "react";
import RouterTabs from "@/components/RouterTabs";
import ShellPage from "@/features/Shell/Page";
import { Container } from "@mutuals/ui";

export default async function UserSettingsLayout({
  children,
}: PropsWithChildren) {
  const tabs = [
    {
      title: "General",
      value: "general",
      href: `/settings`,
    },
    {
      title: "Security",
      value: "security",
      href: `/settings/security`,
    },
    {
      title: "Notifications",
      value: "notifications",
      href: `/settings/notifications`,
    },
  ];

  return (
    <ShellPage title={"Profile Settings"}>
      <Container maxW={"7xl"}>
        <RouterTabs tabs={tabs} mb={"6"}>
          {children}
        </RouterTabs>
      </Container>
    </ShellPage>
  );
}
