import {
  Box,
  Container,
  Flex,
  List,
  ListIcon,
  DarkMode,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from "@splitfi/ui";
import { IoWalletOutline } from "react-icons/io5";
import { MdMoneyOff } from "react-icons/md";
import { RiHandCoinFill } from "react-icons/ri";
import { TbPlugConnected } from "react-icons/tb";

import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import featureImage from "@/assets/direct-simple-fair-payments.webp";

const features = [
  {
    icon: <TbPlugConnected />,
    heading: "Multichain",
    description:
      "Deployed on all major EVM chains. Supporting Ethereum, Polygon, Arbitrum, Optimism and many more.",
    href: "#",
  },
  {
    icon: <MdMoneyOff />,
    heading: "Free to use",
    description:
      "Zero protocol fees. Optional donation based funding program with special rewards.",
    href: "#",
  },
  {
    icon: <RiHandCoinFill />,
    heading: "Supports all fungible assets",
    description:
      "Major ERC20s tokens and ETH are supported. Allows for importing custom ERC20 tokens.",
    href: "#",
  },
  {
    icon: <IoWalletOutline />,
    heading: "Multiple wallets",
    description:
      "Connect multiple wallets at once. Intuitive multi-account overview about incoming and outgoing funds.",
    href: "#",
  },
  {
    icon: <IoWalletOutline />,
    heading: "Compatible with Gnosis Safe",
    description:
      "Connect multiple wallets at once. Intuitive multi-account overview about incoming and outgoing funds.",
    href: "#",
  },
];
export default function HomeFeatures() {
  return (
    <Box py="24" position={"relative"}>
      <Box
        bg={"bg.1"}
        position={"absolute"}
        top={"0"}
        left={"0"}
        w={"full"}
        h={"50%"}
      />

      <Container
        maxW="container.xl"
        px={{ base: "6", lg: "12" }}
        position={"relative"}
      >
        <DarkMode>
          <SimpleGrid
            p={{ base: "6", lg: "24" }}
            gap={{ base: "6", lg: "12" }}
            columns={{ base: 1, lg: 2 }}
            rounded={"lg"}
            bg={"blue.600"}
          >
            <Stack direction={"column"} gap={"6"}>
              <Box>
                <SectionHeader
                  mx={"unset"}
                  textAlign={"left"}
                  headingProps={{ size: "xl" }}
                  mb={"3"}
                >
                  A Few More Things You’re Going To Love
                </SectionHeader>

                <Text color={"color.1"} opacity={"0.6"}>
                  SplitFi is open source and decentralized, with no owner,
                  upgradability, or special privileges. Your payments are fully
                  trusted and independent from intermediaries.
                </Text>
              </Box>

              <List color={"color.1"}>
                {features?.map((f) => (
                  <ListItem key={f.heading} as={Flex} alignItems={"flex-start"}>
                    <ListIcon w="5" h={"5"} mt={"0.5"}>
                      {f.icon}
                    </ListIcon>
                    <Text>{f.heading}</Text>
                  </ListItem>
                ))}
              </List>
            </Stack>
            <Box position={"relative"} rounded={"lg"} overflow={"hidden"}>
              <Image
                src={featureImage}
                alt={"SplitFi features"}
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </SimpleGrid>
        </DarkMode>
      </Container>
    </Box>
  );
}
