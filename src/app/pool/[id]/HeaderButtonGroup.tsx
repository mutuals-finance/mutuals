'use client';

import {
  Box,
  ButtonGroup,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { BsLayoutSidebarReverse } from 'react-icons/bs';
import {
  IoAlertCircleOutline,
  IoCopyOutline,
  IoEllipsisHorizontal,
  IoOpenOutline,
  IoSettingsOutline,
  IoShareOutline,
} from 'react-icons/io5';

import { ipfsResolveData, shortenAddress } from '@/lib/utils';

import { SplitImage } from '@/components/Split/Image';
import { SplitBaseFragmentFragment } from '@/lib/graphql/__generated__/graphql';
import Link from 'next/link';
import SectionContainer from '@/components/Shell/SectionContainer';
import Breadcrumbs from '@/components/Breadcrumbs';
import React from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';

interface PoolHeaderButtonGroupProps {
  pool?: SplitBaseFragmentFragment | null;
}

export default function PoolHeaderButtonGroup({
  pool,
}: PoolHeaderButtonGroupProps) {
  const segment = useSelectedLayoutSegment();
  const showSidebarToggle = segment === '(overview)';

  return (
    <ButtonGroup size={'sm'} flexShrink={'0'}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Show more actions'
          icon={<IoEllipsisHorizontal />}
        />
        <MenuList>
          <MenuItem icon={<IoShareOutline />}>Share</MenuItem>
          <MenuItem icon={<IoCopyOutline />}>
            Copy {shortenAddress(pool?.address)}
          </MenuItem>
          <MenuItem icon={<IoOpenOutline />}>Etherscan</MenuItem>
          <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
          <MenuItem icon={<IoAlertCircleOutline />}>Report</MenuItem>
        </MenuList>
      </Menu>

      {showSidebarToggle && (
        <IconButton
          aria-label='Toggle Sidebar'
          icon={<BsLayoutSidebarReverse />}
        />
      )}
    </ButtonGroup>
  );
}
