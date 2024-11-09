import {
  Link,
  Group,
  Container,
  IconButton,
  Stack,
  Text,
  ColorModeMenu,
  Heading,
} from "@mutuals/ui";
import { BiLogoTelegram } from "react-icons/bi";
import { IoLogoDiscord, IoLogoTwitter } from "react-icons/io5";

export default function FooterFooter() {
  return (
    <Container maxW="7xl">
      <Stack
        pt={6}
        pb={20}
        direction={{ base: "column", md: "row" }}
        gap={6}
        justifyContent={{ md: "space-between" }}
        alignItems={{ md: "center" }}
        borderTopWidth="1px"
        borderColor="border"
      >
        <Text
          fontSize="xs"
          textAlign="center"
          color="fg.muted"
          order={{ base: "3", lg: "0" }}
        >
          &copy; {new Date().getFullYear()} Mutuals Finance, All rights
          reserved.
        </Text>
        <Stack direction="row" gap={6} justify={"space-between"}>
          <Group>
            {[
              { "aria-label": "Twitter", children: <IoLogoTwitter /> },
              { "aria-label": "Discord", children: <IoLogoDiscord /> },
              { "aria-label": "Telegram", children: <BiLogoTelegram /> },
            ].map(({ children, ...props }, i) => (
              <IconButton
                size={"sm"}
                variant="ghost"
                key={props["aria-label"]}
                {...props}
              >
                {children}
              </IconButton>
            ))}
          </Group>

          <ColorModeMenu variant="outline" size="sm" />
        </Stack>
      </Stack>
    </Container>
  );
}
