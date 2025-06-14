"use client";

import { Box, Container, AspectRatio, Stack, Heading, Text } from "@mutuals/ui";

import percentImage from "@/assets/percent.webp";
import bg1Image from "@/assets/pay-1-bg.png";
import bg2Image from "@/assets/pay-2-bg.png";
import bg3Image from "@/assets/pay-3-bg.png";
import prioritizedImage from "@/assets/prioritized.webp";
import SectionHeader from "src/features/Shell/SectionHeader";
import NextImage from "next/image";
import { IoArrowUp } from "react-icons/io5";
import IconBox from "@/components/IconBox";

const payments = [
  {
    tag: "Percentage allocation",
    headline:
      "Seamlessly convert your funds between tokens and fiat in realtime.",
    description: "Recipient allocation based on relative amounts.",
    image: percentImage,
    bgImage: bg1Image,
    isActive: true,
  },
  {
    tag: "Prioritized allocation",
    headline: "Optimize strategic asset distribution for maximum efficiency.",
    description:
      "Limited cashflow with unsupervised distribution? Use SplitFi's account-based priorization engine to predetermine allowed withdraws.",
    image: prioritizedImage,
    bgImage: bg2Image,
    isActive: false,
  },
  {
    tag: "Recurring payments",
    headline:
      "Streamline regular transactions for consistent financial management.",
    description:
      "Setup your Payment Pool to automatically trigger payments in regular intervals. On-chain verification ensures that only allowed funds are transferred.",
    image: percentImage,
    bgImage: bg3Image,
    isActive: false,
  },
];

export default function HomePayments() {
  const payment = payments[0] as (typeof payments)[0];
  return (
    <Box my="32">
      <Container maxW="7xl">
        <SectionHeader label={"Flexible Setup"}>
          Payments For Every Use Case
        </SectionHeader>
        <AspectRatio ratio={{ base: 4 / 3, md: 7 / 3 }}>
          <Stack direction={"row"} flex={"1"} gap={{ base: "1", md: "3" }}>
            {payments.map(({ bgImage, image, tag, isActive, ...payment }) => (
              <Stack
                key={tag}
                flex={{
                  base: isActive ? "1" : "0 2%",
                  md: isActive ? "1" : "0 12.5%",
                }}
                align={"center"}
                justify={"center"}
                p={{ base: "2", md: "12" }}
                position={"relative"}
                rounded={"xl"}
                overflow={"hidden"}
                h={"full"}
              >
                <NextImage
                  src={bgImage}
                  alt={tag}
                  fill={true}
                  style={{ objectFit: "cover" }}
                />
                {isActive && (
                  <Box position={"relative"} rounded={"xl"} overflow={"hidden"}>
                    <NextImage
                      src={image}
                      alt={tag + "image"}
                      width={1200}
                      style={{
                        maxWidth: "32rem",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </Box>
                )}
              </Stack>
            ))}
          </Stack>
        </AspectRatio>

        <Stack direction={"row"} flex={"1"} gap={"3"} mt={"6"}>
          {payments.map(({ bgImage, image, tag, isActive, ...payment }) => (
            <Box
              key={tag}
              flex={isActive ? "1" : "0 20%"}
              rounded={"lg"}
              h={"0.2rem"}
            ></Box>
          ))}
        </Stack>

        <Stack direction={"row"} gap={"3"} maxW={"xl"} mt={"9"}>
          <Box>
            <IconBox size="md" color={"fg.inverted"} bg={"bg.inverted"}>
              <Box transform={"rotate(45deg)"}>
                <IoArrowUp />
              </Box>
            </IconBox>
          </Box>

          <Stack gap={"3"}>
            <Heading as="h3" size={"4xl"}>
              {payment.tag}
            </Heading>

            <Text textStyle={"xl"}>{payment.description}</Text>
          </Stack>
        </Stack>
        {/*
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={"6"}>
          {payments.map(({ bgImage, ...payment }) => (
            <PaymentCard {...payment} key={payment.tag} />
          ))}
        </SimpleGrid>
*/}
      </Container>
    </Box>
  );
}
