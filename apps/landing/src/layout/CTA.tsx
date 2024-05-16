import {
  Box,
  Button,
  Heading,
  DarkMode,
  ButtonGroup,
  Container,
  Grid,
  GridItem,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";

import ctaBgImage from "@/assets/bg-cta.jpg";
import SplitFiLogo from "@/components/Logo";

export default function CTA() {
  return (
    <Box
      as="section"
      position="relative"
      bg={useColorModeValue("primary.600", "primary.600")}
      color="white"
      roundedTop="md"
    >
      <Container maxW="container.xl" py="24" px={{ base: 6, lg: "12" }}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          gap={{ base: "12", lg: "24" }}
          alignItems="flex-start"
        >
          <Box flex="1">
            <Box maxW="32">
              <SplitFiLogo />
            </Box>
          </Box>
          <Box flex="1">
            <Heading size="2xl" mb="6" lineHeight={1.2} color="white">
              Starting with SplitFi is simple, <br />
              fast, and free.
            </Heading>

            <Button colorScheme="whiteAlpha" color="white">
              Launch App
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
