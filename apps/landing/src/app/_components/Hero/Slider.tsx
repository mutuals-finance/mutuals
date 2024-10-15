import {
  Flex,
  FlexProps,
  SimpleGrid,
  MotionBox,
  useBreakpointValue,
} from "@mutuals/ui";
import NextImage from "next/image";

import type { HomeHeroAnimBaseType } from "@/app/_components/Hero/index";
import aboutImage from "@/assets/hero.png";

type HomeHeroSliderProps = FlexProps & HomeHeroAnimBaseType;

const animSpace = 32;

const imageAnimVariants = {
  base: {
    shrink: {
      scale: 1,
    },
    grow: {
      scale: 0.92,
    },
  },
  md: {
    shrink: {
      scale: 1,
    },
    grow: {
      scale: 0.92,
    },
  },
};

export default function HomeHeroSlider({
  animLabel,
  ...props
}: HomeHeroSliderProps) {
  return (
    <Flex
      justifyContent="center"
      position="relative"
      w="full"
      overflow="hidden"
      mt={-1 * animSpace}
      pt={animSpace}
      {...props}
    >
      <MotionBox
        position="relative"
        minW={{ base: "180vh", md: "150%", lg: "133%" }}
        mt={-1 * animSpace}
        scale={0.92}
        animate={animLabel}
        variants={useBreakpointValue(imageAnimVariants)}
      >
        <SimpleGrid columns={3} gap="6">
          <NextImage src={aboutImage} alt="SplitFi Dashboard" />
          <NextImage src={aboutImage} alt="SplitFi Dashboard" />
          <NextImage src={aboutImage} alt="SplitFi Dashboard" />
        </SimpleGrid>
      </MotionBox>
    </Flex>
  );
}
