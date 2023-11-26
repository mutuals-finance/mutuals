import { Icon } from '@chakra-ui/icon';
import {
  Box,
  Button,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import { useSplit } from '@/context/SplitContext';
import { routes } from '@/templates/split/details/SettingsTab';

import { SplitSettingsSection, SplitSettingsTemplateTab } from '#/split';

export default function SettingsSidebarBody() {
  const sections: {
    [key in SplitSettingsSection]?: SplitSettingsTemplateTab[];
  } = {
    [SplitSettingsSection.SPLIT]: routes.slice(0, 3),
    //[SplitSettingsSection.PERSONAL]: routes.slice(3, 4),
  };

  const { split } = useSplit();

  return (
    <VStack spacing={'6'} alignItems={'stretch'}>
      {Object.keys(sections).map((label) => (
        <Box key={label}>
          <Heading as={'span'} size={'xs'} display='block' mb={'3'}>
            {label}
          </Heading>
          <VStack alignItems={'stretch'} spacing={'3'}>
            {sections[label as SplitSettingsSection]?.map((route) => (
              <Button
                as={NextLink}
                href={`/splits/${split.id}/settings/${route.slug}`}
                size={'lg'}
                h={'14'}
                justifyContent={'flex-start'}
                key={label + '-' + route.slug}
                leftIcon={<Icon as={route.icon} />}
              >
                {route.label}
              </Button>
            ))}
          </VStack>
        </Box>
      ))}
    </VStack>
  );
}
