import {
  ColorModeMenu,
  Container,
  Group,
  IconButton,
  Link,
  Stack,
  Text,
} from "@mutuals/ui";
import { social as socialLinks } from "@/features/shell/dashboard/links";

export default function ShellDashboardFooterFooter() {
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
          &copy; {new Date().getFullYear()} Mutuals Finance, All rights
          reserved.
        </Text>
        <Stack direction="row" gap={6} justify={"space-between"}>
          <Group>
            {socialLinks.map(({ href, label, icon: LinkIcon, ...props }) => (
              <Link href={href} key={label} {...props} asChild={true}>
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
