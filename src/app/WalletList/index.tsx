import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

import WalletCard from './WalletCard';
import KeenSlider from '@/components/KeenSlider/KeenSlider';
import KeenSliderSlide from '@/components/KeenSlider/KeenSliderSlide';
import SectionContainer from '@/components/Shell/SectionContainer';

export default function WalletList() {
  return (
    <SectionContainer
      overflow={'hidden'}
      containerProps={{ overflow: 'visible' }}
    >
      <Heading as={'h2'} size={'lg'} fontWeight='700' mb={'6'}>
        Wallets
      </Heading>

      <KeenSlider
        sx={{ overflow: 'visible !important' }}
        options={{
          mode: 'free',
          rubberband: false,
          slides: { perView: 'auto', spacing: 16 },
        }}
      >
        {[1, 2, 3, 4].map((key) => (
          <KeenSliderSlide
            key={key}
            flexShrink={'0'}
            sx={{ w: 'xs !important' }}
          >
            <WalletCard />
          </KeenSliderSlide>
        ))}
      </KeenSlider>
    </SectionContainer>
  );
}
