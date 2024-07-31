import { Container, ContainerProps, Box, Text } from "@mutuals/ui";

type HomeHeroFooterProps = ContainerProps;

export default function HomeHeroFooter({ ...props }: HomeHeroFooterProps) {
  return (
    <Container maxW="container.xl" py="24" px={{ base: 6, sm: 12 }} {...props}>
      <Box maxW={"md"} w={"full"}>
        <Text fontSize={"lg"} fontWeight="500" color={"color.1"}>
          We're eliminating the friction and bias of traditional financing,
          <Text as="span" fontWeight="500" color={"color.3"}>
            connecting business builders to quick, easy capital, and helping
            small to mid-size businesses build something bigger.
          </Text>
        </Text>
      </Box>
    </Container>
  );
}
