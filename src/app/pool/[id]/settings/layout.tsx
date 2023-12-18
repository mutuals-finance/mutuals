import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbProps,
  Container,
  Heading,
  Stack,
  Tab,
  TabList,
  Tabs,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { IoChevronForwardOutline } from 'react-icons/io5';

interface BreadcrumbsProps extends BreadcrumbProps {
  items: { [title: string]: { href: string; isCurrentPage?: boolean } };
}

function Breadcrumbs({ items, ...props }: BreadcrumbsProps) {
  return (
    <Breadcrumb
      fontSize={'sm'}
      spacing='3'
      separator={<IoChevronForwardOutline />}
      {...props}
    >
      {Object.keys(items).map((title) => (
        <BreadcrumbItem
          key={title}
          isCurrentPage={!!items[title]?.isCurrentPage}
        >
          <BreadcrumbLink href={items[title]?.href}>{title}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
export default function PoolSettingsLayout({ children }: PropsWithChildren) {
  return (
    <Container maxW={'container.lg'}>
      <Stack as={'header'} spacing={'6'} my={'12'}>
        <Breadcrumbs
          items={{
            'Payment Pool': { href: '/' },
            Owncloud: {
              href: '/pool/maticmum:0x84f36e3afa3d0994401b24f1eabd4fddbdc715db',
            },
            Settings: {
              isCurrentPage: true,
              href: '/pool/maticmum:0x84f36e3afa3d0994401b24f1eabd4fddbdc715db/settings',
            },
          }}
        />

        <Heading size={'2xl'}>Settings</Heading>
      </Stack>

      <Tabs my={'6'}>
        <TabList>
          <Tab>General</Tab>
          <Tab>Appearance</Tab>
          <Tab>Notifications</Tab>
        </TabList>
      </Tabs>

      {children}
    </Container>
  );
}
