import {
  Container,
  type ContainerProps,
  Group,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ColorModeMenu } from "./color-mode-menu";
import { Link, type NavLinkProps } from "./link";

export type FooterMetaProps = ContainerProps & { links?: NavLinkProps[] };

export function FooterMeta({ links, ...props }: FooterMetaProps) {
  return (
    <Container maxW="7xl" {...props}>
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
          &copy; {new Date().getFullYear()} Mutuals Finance, All rights
          reserved.
        </Text>
        <Stack direction="row" gap={6} justify={"space-between"}>
          <Group>
            {links?.map(({ label, icon: LinkIcon, ...props }) => (
              <Link key={label} {...props} asChild={true}>
                <IconButton aria-label={label} size={"sm"} variant="ghost">
                  <LinkIcon />
                </IconButton>
              </Link>
            ))}
          </Group>

          <ColorModeMenu size="sm" variant="outline" />
        </Stack>
      </Stack>
    </Container>
  );
}
