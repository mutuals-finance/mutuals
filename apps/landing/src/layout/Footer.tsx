import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  DarkMode,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorMode,
  useColorModeValue,
} from "@splitfi/ui";
import type { PropsWithChildren } from "react";
import { BiLogoTelegram } from "react-icons/bi";
import {
  IoChevronDown,
  IoLogoDiscord,
  IoLogoTwitter,
  IoSend,
} from "react-icons/io5";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

function ThemeToggleMenu() {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <DarkMode>
      <Menu>
        {({ isOpen }) => (
          <>
            <ButtonGroup>
              <MenuButton
                as={Button}
                aria-label="Open theme menu"
                leftIcon={colorMode === "dark" ? <RiMoonFill /> : <RiSunLine />}
                rightIcon={
                  <IoChevronDown rotate={colorMode === "dark" ? 0 : 0.5} />
                }
              >
                {colorMode === "dark" ? "Dark Theme" : "Light Theme"}
              </MenuButton>
            </ButtonGroup>

            <MenuList color="color.1">
              <MenuItem
                aria-label="Enable light theme"
                icon={<RiSunLine />}
                onClick={() => setColorMode("light")}
              >
                Light Theme
              </MenuItem>

              <MenuItem
                aria-label="Enable dark theme"
                icon={<RiMoonFill />}
                onClick={() => setColorMode("dark")}
              >
                Dark Theme
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </DarkMode>
  );
}

const ListHeader = ({ children }: PropsWithChildren) => {
  return (
    <Text fontSize="xs" textTransform="uppercase" mb={3} color="color.2">
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      as="footer"
      role="contentinfo"
      maxW="100%"
      w="100%"
      pt="12"
      bg="gray.900"
    >
      <DarkMode>
        <Container
          as={Stack}
          maxW="container.xl"
          py={12}
          px={{ base: "6", lg: "12" }}
          color="color.1"
        >
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 4 }}
            spacing={6}
            fontSize="sm"
          >
            <Stack align="flex-start">
              <ListHeader>Company</ListHeader>
              <Link href="/#">About Us</Link>
              <Link href="/#">Blog</Link>
              <Link href="/#">Careers</Link>
              <Link href="/#">Contact Us</Link>
            </Stack>
            <Stack align="flex-start">
              <ListHeader>Support</ListHeader>
              <Link href="/#">Help Center</Link>
              <Link href="/#">Safety Center</Link>
              <Link href="/#">Community Guidelines</Link>
            </Stack>

            <Stack align="flex-start">
              <ListHeader>Legal</ListHeader>
              <Link href="/#">Cookies Policy</Link>
              <Link href="/#">Privacy Policy</Link>
              <Link href="/#">Terms of Service</Link>
              <Link href="/#">Law Enforcement</Link>
            </Stack>

            <Stack align="flex-start">
              <ListHeader>Stay up to date</ListHeader>
              <Stack direction="row">
                <Input variant="filled" placeholder="Your email address" />
                <IconButton aria-label="Subscribe" icon={<IoSend />} />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </DarkMode>

      <Box borderTopWidth={1} borderStyle="1px solid" borderColor="gray.800">
        <Container
          as={Stack}
          maxW="container.xl"
          py={6}
          px={{ base: "6", lg: "12" }}
          direction={{ base: "column", md: "row" }}
          spacing={6}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <DarkMode>
            <Text fontSize="xs" color="color.3" fontFamily="monospace">
              &copy; {new Date().getFullYear()} SplifFi, Inc. All rights
              reserved.
            </Text>
          </DarkMode>
          <Stack direction="row" spacing={6}>
            <DarkMode>
              <ButtonGroup variant="ghost">
                <IconButton
                  as={Link}
                  aria-label="Twitter"
                  href="/#"
                  icon={<IoLogoTwitter />}
                />
                <IconButton
                  as={Link}
                  aria-label="Discord"
                  href="/#"
                  icon={<IoLogoDiscord />}
                />
                <IconButton
                  as={Link}
                  aria-label="Telegram"
                  href="/#"
                  icon={<BiLogoTelegram />}
                />
              </ButtonGroup>
            </DarkMode>

            <ThemeToggleMenu />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
