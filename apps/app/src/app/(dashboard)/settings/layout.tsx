import { PropsWithChildren } from 'react';
import RouterTabs from '@/components/RouterTabs';
import PageShell from '@/components/Shell/PageShell';
import { Container } from '@chakra-ui/react';

interface ProfileSettingsLayoutProps {}

export default async function ProfileSettingsLayout({
  children,
}: PropsWithChildren<ProfileSettingsLayoutProps>) {
  const tabs = [
    {
      title: 'General',
      href: `/settings`,
    },
    {
      title: 'Security',
      href: `/settings/security`,
    },
    {
      title: 'Notifications',
      href: `/settings/notifications`,
    },
  ];

  return (
    <PageShell title={'Profile Settings'}>
      <Container variant={'shell'}>
        <RouterTabs tabs={tabs} mb={'6'}>
          {children}
        </RouterTabs>
      </Container>
    </PageShell>
  );
}
