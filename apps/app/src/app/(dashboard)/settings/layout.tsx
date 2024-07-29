import { PropsWithChildren } from "react";
import RouterTabs from "@/components/RouterTabs";
import ShellPage from "src/features/Shell/Page";
import { Container } from "@mutuals/ui";

export default async function UserSettingsLayout({
  children,
}: PropsWithChildren) {
  const tabs = [
    {
      title: "General",
      href: `/settings`,
    },
    {
      title: "Security",
      href: `/settings/security`,
    },
    {
      title: "Notifications",
      href: `/settings/notifications`,
    },
  ];

  return (
    <ShellPage title={"Profile Settings"}>
      <Container variant={"shell"}>
        <RouterTabs tabs={tabs} mb={"6"}>
          {children}
        </RouterTabs>
      </Container>
    </ShellPage>
  );
}
