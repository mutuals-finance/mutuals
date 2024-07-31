"use client";

import {
  Box,
  Stack,
  Button,
  Container,
  Heading,
  SimpleGrid,
} from "@mutuals/ui";
import ContactOptionCard from "@/app/contact/ContactOptionCard";
import { IoChatbubblesOutline, IoPaperPlaneOutline } from "react-icons/io5";

export default function ContactHeader() {
  return (
    <Box as="header" mt="12" mb="32" pt={"20"}>
      <Container
        maxW={{ base: "container.sm", lg: "container.lg" }}
        px={{ base: "3", lg: "12" }}
      >
        <Stack textAlign={"center"} gap={"12"} align={"center"}>
          <Heading as="h1" variant="h.1">
            Contact Us
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={{ base: "6", lg: "12" }}
          >
            <ContactOptionCard
              icon={IoChatbubblesOutline}
              heading={"Contact sales"}
              description={[
                "Discuss your enterprise requirements, explore personalized pricing options, or request a demo.",
              ]}
            >
              <Button mt={{ base: "3", lg: "6" }} size="lg">
                Let's Chat
              </Button>
            </ContactOptionCard>
            <ContactOptionCard
              icon={IoPaperPlaneOutline}
              heading={"Get in touch"}
              description={[
                "Found a bug? File a GitHub issue and our team will review it right away.",
                "Need something else? Send us a note.",
              ]}
            ></ContactOptionCard>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
