import {
  Button,
  Container,
  Heading,
  Text,
  Group,
  VStack,
  Box,
  Link,
  Theme,
  AspectRatio,
} from "@mutuals/ui";
import GridBg from "@/components/GridBg";
import NextImage from "next/image";
import dashboardDesktopImage from "@/assets/dashboard-desktop.png";
import transactionHistoryImage from "@/assets/transaction-history.png";
import assetAllocationImage from "@/assets/asset-allocation.png";
import dashboardHandlersImage from "@/assets/dashboard-handlers.png";

export const transitionProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function HomeHero() {
  return (
    <Box position={"relative"} pt={"20"}>
      <GridBg />

      <Container maxW={{ base: "xl", lg: "4xl" }} my={{ base: "12", lg: "16" }}>
        <VStack
          alignItems={{ base: "center", md: "center" }}
          textAlign={{ base: "center", md: "center" }}
          gap={"4"}
        >
          <Heading
            as="h1"
            size={{ base: "5xl", lg: "7xl" }}
            fontWeight={"medium"}
          >
            Reimagining Programmable Money.
          </Heading>
          <Box maxW={"xl"}>
            <Text textStyle={{ base: "lg", lg: "xl" }} color={"fg.subtle"}>
              Automated, trustless payments for frictionless financial
              interactions
            </Text>
          </Box>
          <Group gap="2">
            <Link
              href={"https://app.mutuals.finance"}
              target="_blank"
              asChild={true}
            >
              <Button size={"2xl"}>Start for free</Button>
            </Link>
            <Link
              href={"https://docs.mutuals.finance"}
              target="_blank"
              asChild={true}
            >
              <Button size={"2xl"} variant={"surface"}>
                Learn more
              </Button>
            </Link>
          </Group>
        </VStack>
      </Container>

      <Container
        maxW={"7xl"}
        position={"relative"}
        overflow={{ base: "hidden", lg: "unset" }}
        px={{ base: "0", lg: "12" }}
        pt={{ base: "6", lg: "0" }}
      >
        <Theme appearance={"light"} bg={"transparent"}>
          <Box w="full" maxW="4xl" mx="auto">
            <AspectRatio
              ratio={{ base: 1, md: 2457 / 1441 }}
              w="full"
              roundedTop={{ lg: "2xl" }}
              overflow={"hidden"}
              shadow={{ lg: "md" }}
            >
              <NextImage
                src={dashboardDesktopImage}
                alt={"Mutuals Dashboard Hero Desktop"}
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </AspectRatio>
          </Box>
          <Box
            rounded={"2xl"}
            overflow={"hidden"}
            position={"absolute"}
            w={{ base: "44", md: "64" }}
            top={{ base: "0", lg: "25%" }}
            transform={{ lg: "translateY(-50%)" }}
            left={{ base: "2", lg: "2" }}
            shadow={"lg"}
          >
            <NextImage
              src={assetAllocationImage}
              alt={"Mutuals Dashboard Hero Transaction History"}
            />
          </Box>
          <Box
            rounded={"2xl"}
            overflow={"hidden"}
            position={"absolute"}
            bottom={{ base: "2", md: "25%" }}
            transform={{ md: "translateY(50%)" }}
            left={{ base: "2", lg: "24" }}
            w={{ base: "52", md: "64" }}
            shadow={"lg"}
          >
            <NextImage
              src={dashboardHandlersImage}
              alt={"Mutuals Dashboard Hero Transaction History"}
            />
          </Box>
          <Box
            rounded={"2xl"}
            overflow={"hidden"}
            position={"absolute"}
            top={"50%"}
            transform={{ base: "translate(50%,-50%)", md: "translateY(-50%)" }}
            right={{ base: "2", lg: "2" }}
            w={{ base: "2xs", lg: "md" }}
            shadow={"lg"}
          >
            <NextImage
              src={transactionHistoryImage}
              alt={"Mutuals Dashboard Hero Transaction History"}
            />
          </Box>
        </Theme>
      </Container>
    </Box>
  );
}
