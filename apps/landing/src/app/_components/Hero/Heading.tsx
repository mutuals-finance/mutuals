import {
  Button,
  Group,
  Container,
  ContainerProps,
  Heading,
  Stack,
  Tag,
  MotionBox,
} from "@mutuals/ui";

import type { HomeHeroAnimBaseType } from "@/app/_components/Hero/index";
import { IoSparklesOutline } from "react-icons/io5";

type HomeHeroHeadingProps = ContainerProps & HomeHeroAnimBaseType;

export default function HomeHeroHeading({
  animLabel,
  ...props
}: HomeHeroHeadingProps) {
  return (
    <Container maxW="8xl" mr="auto" py="24" {...props}>
      <MotionBox
        animate={animLabel}
        variants={{ shrink: { scale: 0.8 }, grow: { scale: 1 } }}
      >
        <Stack
          direction="column"
          gap="6"
          position={"relative"}
          alignItems={{ base: "flex-start", lg: "center" }}
          textAlign={{ lg: "left" }}
        >
          <Tag
            size="lg"
            colorPalette={"purple"}
            endElement={<IoSparklesOutline />}
          >
            Celebrating our Alpha Launch
          </Tag>

          <Heading as="h1" fontSize="clamp(3rem,6vw,5.6rem)">
            The best way to manage on-chain payments
          </Heading>

          <Group
            position={{ lg: "absolute" }}
            bottom={{ lg: "5" }}
            right={{ lg: "0" }}
            gap="3"
          >
            <Button size={{ base: "md", lg: "lg" }} variant={"subtle"}>
              Learn More
            </Button>
            <Button size={{ base: "md", lg: "lg" }}>Start For Free</Button>
          </Group>
        </Stack>
      </MotionBox>
    </Container>
  );
}
