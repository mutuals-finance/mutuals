import {
  Button,
  ButtonGroup,
  Container,
  ContainerProps,
  Heading,
  Stack,
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
      maxW="container.xl"
      mr="auto"
      py="24"
      px={{ base: 6, sm: 12 }}
      {...props}
    >
      <AnimationBox
        animate={animLabel}
        variants={{ shrink: { scale: 0.8 }, grow: { scale: 1 } }}
      >
        <Stack direction="column" gap="6" position={"relative"}>
          <Heading
            color={"color.1"}
            as="h1"
            fontSize="clamp(3.2rem,6.4vw,5.6rem)"
            fontWeight="500"
            lineHeight="1.2"
          >
            The best way to manage on-chain payments
          </Heading>

          <ButtonGroup
            position={{ lg: "absolute" }}
            size="lg"
            bottom={{ lg: "5" }}
            right={{ lg: "0" }}
            spacing="3"
          >
            <Button
              rounded={"full"}
              colorScheme={"whiteAlpha"}
              color={"color.1"}
            >
              Learn More
            </Button>
            <Button rounded={"full"} variant={"blackWhite"}>
              Start For Free
            </Button>
          </ButtonGroup>
        </Stack>
      </AnimationBox>
    </Container>
  );
}
