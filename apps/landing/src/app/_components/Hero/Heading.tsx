import {
  Button,
  Group,
  Container,
  ContainerProps,
  Heading,
  Stack,
  Text,
  Tag,
  MotionBox,
} from "@mutuals/ui";

import type { HomeHeroAnimBaseType } from "@/app/_components/Hero/index";

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
      px={{ base: 0, sm: 12 }}
      {...props}
    >
      <MotionBox
        animate={animLabel}
        variants={{ shrink: { scale: 0.8 }, grow: { scale: 1 } }}
      >
        <Stack
          direction="column"
          gap="6"
          position={"relative"}
          align={{ base: "center", lg: "center" }}
          textAlign={{ base: "center", lg: "left" }}
        >
          <Tag
            size="lg"
            borderRadius="md"
            bg={"bgAlpha.4"}
            border={"1px solid"}
            borderColor={"border.1"}
          >
            <Text
              variant={"tag"}
              bgGradient="linear(to-bl, pink.400, purple.400, primary.400)"
              bgClip="text"
              fontSize={"sm"}
            >
              Join now for free
            </Text>
          </Tag>
          <Heading
            as="h1"
            fontSize="clamp(3.4rem,6.4vw,5.6rem)"
            color={"color.1"}
          >
            The best way to manage on-chain payments
          </Heading>

          <Group
            position={{ lg: "absolute" }}
            bottom={{ lg: "5" }}
            right={{ lg: "0" }}
            gap="3"
          >
            <Button variant={"ghost"}>Learn More</Button>
            <Button>Start For Free</Button>
          </Group>
        </Stack>
      </MotionBox>
    </Container>
  );
}
