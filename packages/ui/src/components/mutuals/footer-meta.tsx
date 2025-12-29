import {
  Group,
  Container,
  IconButton,
  Stack,
  Text,
  ContainerProps,
} from "@chakra-ui/react";
import { ColorModeMenu } from "./color-mode-menu";
import { Link, type NavLinkProps } from "./link";

export type FooterMetaProps = ContainerProps & { links?: NavLinkProps[] };

export function FooterMeta({ links, ...props }: FooterMetaProps) {
  return (
    <Container maxW="7xl" {...props}>
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
            {links?.map(({ label, icon: LinkIcon, ...props }) => (
              <Link key={label} {...props} asChild={true}>
                <IconButton size={"sm"} variant="ghost" aria-label={label}>
                  <LinkIcon />
                </IconButton>
              </Link>
            ))}
          </Group>

          <ColorModeMenu variant="outline" size="sm" />
        </Stack>
      </Stack>
    </Container>
  );
}
