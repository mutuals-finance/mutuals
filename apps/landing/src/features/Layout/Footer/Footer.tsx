import {
  ColorModeMenu,
  Container,
  Group,
  IconButton,
  Link,
  Stack,
  Text,
} from "@mutuals/ui";
import { socialLinks } from "@/features/layout/links";
import { CurrentYear } from "./current-year";

export default function FooterFooter() {
  return (
    <Container maxW="7xl">
      <Stack
        alignItems={{ md: "center" }}
        borderColor="border"
        borderTopWidth="1px"
        direction={{ base: "column", md: "row" }}
        gap={6}
        justifyContent={{ md: "space-between" }}
        pb={20}
        pt={6}
      >
        <Text
          color="fg.muted"
          fontSize="xs"
          order={{ base: "3", lg: "0" }}
          textAlign="center"
        >
          &copy; <CurrentYear /> Mutuals, All rights reserved.
        </Text>
        <Stack direction="row" gap={6} justify={"space-between"}>
          <Group>
            {socialLinks.map(
              ({ children, href, "aria-label": ariaLabel, ...props }) => (
                <Link href={href} key={ariaLabel} {...props} asChild={true}>
                  <IconButton
                    aria-label={ariaLabel}
                    size={"sm"}
                    variant="ghost"
                  >
                    {children}
                  </IconButton>
                </Link>
              )
            )}
          </Group>

          <ColorModeMenu size="sm" variant="outline" />
        </Stack>
      </Stack>
    </Container>
  );
}
