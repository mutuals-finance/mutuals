import { Box, Container, Grid } from "@splitfi/ui";

import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/app/Features/FeatureCard";
import NextImage from "next/image";
import tokensImage from "@/assets/token-stack.jpg";
import featureBgImage from "@/assets/embedded-gtm-fast.png";
import developerBgImage from "@/assets/developer.png";

export default function HomeFeatures() {
  return (
    <Box my="24" position={"relative"}>
      <Container
        maxW="container.xl"
        px={{ base: "6", lg: "12" }}
        position={"relative"}
      >
        <SectionHeader label={"Embeddable Features"}>
          A Few More Things You’re Going To Love
        </SectionHeader>

        {/*
        <Text color={"color.1"} opacity={"0.6"}>
          SplitFi is open source and decentralized, with no owner,
          upgradability, or special privileges. Your payments are fully
          trusted and independent from intermediaries.
        </Text>
*/}

        <Grid
          gap={"3"}
          templateColumns={{
            base: "1fr",
            lg: "repeat(6, 1fr)",
          }}
          templateRows={{ lg: "repeat(3, 20rem)" }}
        >
          <FeatureCard
            index={1}
            heading="Supports all fungible assets"
            description="Major ERC20s tokens and ETH are supported. Allows for importing custom ERC20 tokens."
            colSpan={2}
            bg={"gray.900"}
            color={"white"}
          >
            <Box
              position={"absolute"}
              top={"0"}
              h={"40"}
              right={"0"}
              w={"full"}
            >
              <NextImage
                src={tokensImage}
                alt={"SplitFi supports all fungible assets"}
                fill={true}
                style={{ objectFit: "contain", objectPosition: "center right" }}
              />
            </Box>
          </FeatureCard>

          <FeatureCard
            index={2}
            heading="Open source and decentralized"
            description="SplitFi is open source and decentralized, with no owner, upgradability, or special privileges."
            colSpan={4}
            color={"white"}
          >
            <NextImage
              src={developerBgImage}
              alt={"SplitFi is open source"}
              fill={true}
              style={{ objectFit: "cover", objectPosition: "top right" }}
            />
          </FeatureCard>

          <FeatureCard
            index={3}
            heading="Multi-Wallets Overview"
            description="Connect multiple wallets at once. Intuitive multi-account overview about incoming and outgoing funds."
            colSpan={3}
            rowSpan={2}
            justify={"flex-start"}
            bg={"gray.900"}
            color={"white"}
          ></FeatureCard>

          <FeatureCard
            index={4}
            heading="Free To Use"
            description="Zero protocol fees. Optional donation based funding program with special rewards."
            colSpan={3}
            color={"white"}
          >
            <NextImage
              src={featureBgImage}
              alt={"SplitFi is free to use"}
              fill={true}
              style={{ objectFit: "cover", objectPosition: "center left" }}
            />
          </FeatureCard>

          <FeatureCard
            index={4}
            heading="Gnosis Safe Compatibility"
            description="Connect multiple wallets at once. Intuitive multi-account overview about incoming and outgoing funds."
            colSpan={3}
            bg={"gray.800"}
            color={"white"}
          ></FeatureCard>
        </Grid>
      </Container>
    </Box>
  );
}
