import {
  Button,
  Container,
  Heading,
  Text,
  Group,
  VStack,
  MotionBox,
  For,
  Box,
} from "@mutuals/ui";
import HeroImageSlider from "@/features/Home/Hero/ImageSlider";

export const transitionProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function HomeHero() {
  return (
    <VStack
      position={"relative"}
      pt={{ base: "16", lg: "36" }}
      mb={"16"}
      minH={{ base: "100vh", lg: "unset" }}
      justifyContent="center"
    >
      <Container maxW={{ base: "xl", lg: "4xl" }} mb={{ base: "12", lg: "24" }}>
        <VStack
          alignItems={{ base: "center", md: "center" }}
          textAlign={{ base: "center", md: "center" }}
          gap={"6"}
        >
          <For
            each={[
              {
                children: (
                  <Heading
                    as="h1"
                    size={{ base: "5xl", lg: "7xl" }}
                    fontWeight={"medium"}
                  >
                    The best way to manage onchain payments.
                  </Heading>
                ),
              },
              {
                children: (
                  <Box maxW={"xl"}>
                    <Text
                      textStyle={{ base: "lg", lg: "xl" }}
                      color={"fg.muted"}
                    >
                      Automated and trustless revenue distribution without
                      reliance on intermediaries
                    </Text>
                  </Box>
                ),
              },
              {
                children: (
                  <Group gap="6">
                    <Button size={"2xl"}>Start for free</Button>
                    <Button size={"2xl"} variant={"surface"}>
                      Learn more
                    </Button>
                  </Group>
                ),
              },
            ]}
          >
            {({ children }, index) => (
              <MotionBox
                custom={index}
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
              >
                {children}
              </MotionBox>
            )}
          </For>
        </VStack>
      </Container>

      <HeroImageSlider />
    </VStack>
  );
}
