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
  containerProps,
  ...props
}: IconButtonListContainerProps) {
  return (
    <SectionContainer
      overflow={'hidden'}
      containerProps={{ overflow: 'visible', ...containerProps }}
      {...props}
    >
      <KeenSlider
        sx={{ overflow: 'visible !important' }}
        options={{
          mode: 'free',
          rubberband: false,
          slides: { perView: 'auto', spacing: 32 },
        }}
      >
        {items.map((props, i) => (
          <KeenSliderSlide
            key={`${i}-${props['aria-label']}`}
            flexShrink={'0'}
            sx={{ w: '24 !important' }}
          >
            <IconTextButton {...props} />
          </KeenSliderSlide>
        ))}
      </KeenSlider>
      {children}
    </SectionContainer>
  );
}
