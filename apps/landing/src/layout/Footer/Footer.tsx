import {
  Link,
  Group,
  Container,
  IconButton,
  Stack,
  Text,
  ColorModeMenu,
} from "@mutuals/ui";
import { BiLogoTelegram } from "react-icons/bi";
import { IoLogoDiscord, IoLogoTwitter } from "react-icons/io5";

export default function FooterFooter() {
  return (
    <Container maxW="container.xl" px={{ base: "6", lg: "12" }}>
      <Stack
        pt={6}
        pb={20}
        direction={{ base: "column", md: "row" }}
        gap={6}
        justify={{ md: "space-between" }}
        align={{ md: "center" }}
        borderTopWidth={1}
        borderStyle="1px solid"
        borderColor="border.1"
      >
        <Text
          fontSize="xs"
          textAlign="center"
          color="alpha.3"
          order={{ base: "3", lg: "0" }}
        >
          &copy; {new Date().getFullYear()} Mutuals Finance, All rights
          reserved.
        </Text>
        <Stack direction="row" gap={6} justify={"space-between"}>
          <Group variant="ghost" size={"sm"}>
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
          </Group>

          <ColorModeMenu variant="outline" size="sm" />
        </Stack>
      </Stack>
    </Container>
  );
}
