import {
  Button,
  ButtonGroup,
  Container,
  ContainerProps,
  Heading,
  Stack,
  Text,
} from "@splitfi/ui";

import type { HomeHeroAnimBaseType } from "@/app/Hero/index";
import AnimationBox from "@/components/Animation/Box";

type HomeHeroHeadingProps = ContainerProps & HomeHeroAnimBaseType;

export default function HomeHeroHeading({
  animLabel,
  ...props
}: HomeHeroHeadingProps) {
  return (
    <Container
      maxW="container.lg"
      mr="auto"
      py="24"
      px={{ base: 6, sm: 12 }}
      {...props}
    >
      <AnimationBox
        animate={animLabel}
        variants={{ shrink: { scale: 0.8 }, grow: { scale: 1 } }}
      >
        <Stack gap="12" alignItems="flex-start" justifyContent={"flex-start"}>
          <Text variant={"tag"}>Join now for free</Text>
          <Heading
            color={"color.1"}
            as="h1"
            fontSize="clamp(3.2rem,5.4vw,6.4rem)"
            fontWeight="500"
            lineHeight="1.2"
          >
            The best way to manage your on-chain income.
          </Heading>

          <ButtonGroup spacing="6">
            <Button variant={"blackWhite"}>Get Started</Button>
          </ButtonGroup>
        </Stack>
      </AnimationBox>
    </Container>
  );
}
