import {
  IoAppsOutline,
  IoSettingsOutline,
  IoWalletOutline,
} from 'react-icons/io5';

import IconButtonListContainer from '@/components/Shell/IconButtonListContainer';
import Link from 'next/link';
import SectionContainer from '@/components/Shell/SectionContainer';

export default function DashboardHandlers() {
  const items = [
    {
      'aria-label': 'Add Wallet',
      icon: <IoWalletOutline />,
      as: Link,
      href: '/wallet/new',
      scroll: false,
    },
    {
      'aria-label': 'Create Pool',
      icon: <IoAppsOutline />,
      as: Link,
      href: '/pool/new',
    },
    {
      'aria-label': 'Settings',
      icon: <IoSettingsOutline />,
      as: Link,
      href: '/settings',
    },
  ];

  return (
    <SectionContainer>
      <IconButtonListContainer items={items} />
    </SectionContainer>
  );
}
