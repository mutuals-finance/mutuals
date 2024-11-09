import {
  Box,
  CardRoot,
  CardBody,
  Button,
  Heading,
  Container,
  Stack,
} from "@mutuals/ui";
import NextImage from "next/image";
import ctaBgImage from "@/assets/background-primary.png";

export default function CTA() {
  return (
    <Container as="section" fluid={true}>
      <Box
        rounded={"lg"}
        position="relative"
        overflow="hidden"
        className={"dark"}
      >
        <NextImage
          src={ctaBgImage}
          alt={"CTA bg"}
          fill={true}
          style={{ objectFit: "cover" }}
        />
        <Container
          position={"relative"}
          as={Stack}
          alignItems="center"
          justifyContent="center"
          textAlign={"center"}
          maxW="2xl"
          py="24"
          gap={"6"}
        >
          <Heading size={{ base: "4xl", md: "5xl" }} color={"fg"}>
            Starting with Mutuals is simple, fast, and free.
          </Heading>
          <Button size="lg" colorPalette={"blue"}>
            Get Started For Free
          </Button>
        </Container>
      </Box>
    </Container>
  );
}