import {
  Group,
  Container,
  IconButton,
  Stack,
  Text,
  ColorModeMenu,
} from "@mutuals/ui";
import { socialLinks } from "@/features/Layout/links";

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
            {socialLinks.map(({ children, href: _variant, ...props }) => (
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
