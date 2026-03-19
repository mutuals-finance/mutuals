import { Container, RouterTabs } from "@mutuals/ui";
import type { PropsWithChildren } from "react";
import ShellPage from "@/features/shell/page";

export default function UserSettingsLayout({ children }: PropsWithChildren) {
  const tabs = [
    {
      title: "General",
      value: "general",
      href: "/settings",
    },
    {
      title: "Security",
      value: "security",
      href: "/settings/security",
    },
    {
      title: "Notifications",
      value: "notifications",
      href: "/settings/notifications",
    },
  ];

  return (
    <ShellPage title={"Profile Settings"}>
      <Container maxW={"7xl"}>
        <RouterTabs mb={"6"} tabs={tabs}>
          {children}
        </RouterTabs>
      </Container>
    </ShellPage>
  );
}
