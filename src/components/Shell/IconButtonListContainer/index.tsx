'use client';

import SectionContainer, {
  SectionContainerProps,
} from '@/components/Shell/SectionContainer';
import KeenSlider from '@/components/KeenSlider/KeenSlider';
import KeenSliderSlide from '@/components/KeenSlider/KeenSliderSlide';
import IconTextButton from '@/components/IconTextButton';
import { IconButtonProps } from '@chakra-ui/react';

interface IconButtonListContainerProps extends SectionContainerProps {
  items: IconButtonProps[];
}

export default function IconButtonListContainer({
  children,
  items,
  ...props
}: IconButtonListContainerProps) {
  return (
    <SectionContainer
      overflow={'hidden'}
      containerProps={{ px: '0' }}
      {...props}
    >
      <KeenSlider
        sx={{ overflow: 'visible !important' }}
        options={{
          mode: 'free',
          rubberband: false,
          slides: { perView: 'auto', spacing: 16 },
        }}
      >
        {items.map((props, i) => (
          <KeenSliderSlide
            key={`${i}-${props['aria-label']}`}
            flexShrink={'0'}
            sx={{ w: '36 !important' }}
          >
            <IconTextButton {...props} />
          </KeenSliderSlide>
        ))}
      </KeenSlider>
      {children}
    </SectionContainer>
  );
}
