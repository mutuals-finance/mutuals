import {
  Button,
  ButtonGroup,
  Container,
  Heading,
  Stack,
  Tag,
  TagLabel,
  useColorModeValue,
} from '@chakra-ui/react';

import type { HomeHeroAnimBaseType } from '~/app/Hero/index';
import AnimationBox from '~/components/Animation/Box';

type HomeHeroHeadingProps = HomeHeroAnimBaseType;

export default function HomeHeroHeading({ animLabel }: HomeHeroHeadingProps) {
  return (
    <Container maxW="container.lg" py="24" px={{ base: 6, sm: 12 }}>
      <AnimationBox
        animate={animLabel}
        variants={{ shrink: { scale: 0.8 }, grow: { scale: 1 } }}
      >
        <Stack gap="12" textAlign="center" alignItems="center" mx="auto">
          <Tag
            variant="solid"
            borderRadius="full"
            colorScheme="primary"
            size="lg"
          >
            <TagLabel fontWeight="400">Join now for free</TagLabel>
          </Tag>
          <Heading
            as="h1"
            fontSize="clamp(3rem,5.2vw,6rem)"
            fontWeight="400"
            lineHeight="1.4"
            color="white"
          >
            The best way to manage your on-chain income.
          </Heading>

          <ButtonGroup size="lg" spacing="6">
            <Button color="white" colorScheme="whiteAlpha">
              Learn More
            </Button>
            <Button variant="blackWhite">Launch App</Button>
          </ButtonGroup>
        </Stack>
      </AnimationBox>
    </Container>
  );
}
