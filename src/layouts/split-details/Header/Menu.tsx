import {
  Box,
  Divider,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

import routes from '@/templates/split/details';

interface MenuProps {
  id: string;
}

export default function Menu({ id }: MenuProps) {
  const router = useRouter();

  const tabIndex = useMemo(() => {
    if (router.query.slug) {
      const slug = router.query.slug as string;
      return routes.findIndex((route) => route.slug.includes(slug));
    }
    return 0;
  }, [router.query.slug]);

  const tabColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.600');
  const tabColorActive = useColorModeValue('black', 'white');

  return (
    <Box>
      <Tabs position='relative' variant='unstyled' index={tabIndex}>
        <TabList>
          {routes.map((route, i) => (
            <Tab
              _hover={{ color: tabColorActive }}
              _focus={{ outline: '0', boxShadow: 'none' }}
              fontSize={'md'}
              fontWeight={'600'}
              p={'4'}
              color={i === tabIndex ? tabColorActive : tabColor}
              as={Link}
              scroll={false}
              href={`/splits/${'maticmum'}:${id}/${route.slug}`}
              key={route.slug}
            >
              {route.label}
            </Tab>
          ))}
        </TabList>
        <TabIndicator
          mt='-1.5px'
          height='2px'
          bg='blue.500'
          borderRadius='1px'
        />
      </Tabs>

      <Divider />
    </Box>
  );
}
