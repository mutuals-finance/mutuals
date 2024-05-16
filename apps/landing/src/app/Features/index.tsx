'use client';

import { Box, Container, GridItem, SimpleGrid } from '@chakra-ui/react';
import { IoWalletOutline } from 'react-icons/io5';
import { LuSplit } from 'react-icons/lu';
import { MdMoneyOff } from 'react-icons/md';
import { RiHandCoinFill } from 'react-icons/ri';
import { TbPlugConnected } from 'react-icons/tb';

import FeatureCard from '~/app/Features/FeatureCard';
import SectionHeader from '~/components/SectionHeader';

export default function HomeFeatures() {
  return (
    <Box my="24">
      <Container maxW="container.xl" px={{ base: '6', lg: '12' }}>
        <SectionHeader>A Few More Things You’re Going To Love</SectionHeader>
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={{ base: 6, lg: 12 }}>
          <FeatureCard
            icon={MdMoneyOff}
            as={GridItem}
            heading="Free to use"
            description="Zero protocol fees. Optional donation based funding program with special rewards."
            href="#"
          />
          <FeatureCard
            icon={LuSplit}
            as={GridItem}
            heading="No intermediaries. Fully trusted."
            description="The non-custodial protocol is open source and decentralized, with no owner, upgradability, or special privileges.."
            href="#"
          />
          <FeatureCard
            icon={TbPlugConnected}
            as={GridItem}
            heading="Multichain"
            description="Deployed on all major EVM chains. Supporting Ethereum, Polygon, Arbitrum, Optimism and many more."
            href="#"
          />
          <FeatureCard
            icon={RiHandCoinFill}
            as={GridItem}
            heading="Supports all fungible assets"
            description="Major ERC20s tokens and ETH are supported. Allows for importing custom ERC20 tokens."
            href="#"
          />
          <FeatureCard
            icon={IoWalletOutline}
            as={GridItem}
            heading="Multiple wallets"
            description="Connect multiple wallets at once. Intuitive multi-account overview about incoming and outgoing funds."
            href="#"
          />
          <FeatureCard
            icon={IoWalletOutline}
            as={GridItem}
            heading="Compatible with Gnosis Safe"
            description="Connect multiple wallets at once. Intuitive multi-account overview about incoming and outgoing funds."
            href="#"
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
