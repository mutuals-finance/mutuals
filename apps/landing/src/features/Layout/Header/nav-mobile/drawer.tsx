import {
  Box,
  Button,
  type ButtonProps,
  Center,
  ColorModeButton,
  type Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Group,
  IconButton,
  Link,
  type LinkProps,
  Separator,
  Stack,
} from "@mutuals/ui";
import type { PropsWithChildren } from "react";
import { BiX } from "react-icons/bi";
import NavMobileMenuButton from "@/features/layout/header/nav-mobile/menu-button";
import NavWrapper from "@/features/layout/header/nav-wrapper";
import { socialLinks } from "@/features/layout/links";

interface MobileNavProps
  extends Omit<Drawer.ContentProps, "children">,
    PropsWithChildren {
  closeButtonProps?: ButtonProps;
  links?: LinkProps[];
}

export default function NavMobileDrawer({
  links,
  closeButtonProps,
  ...props
}: MobileNavProps) {
  return (
    <DrawerContent gap={"0"} {...props}>
      <DrawerHeader p={"0"}>
        <NavWrapper
          borderBottomWidth={"1px"}
          borderColor={"border"}
          h={"20"}
          justifyContent="space-between"
        >
          <NavMobileMenuButton
            aria-label="Close Navigation"
            {...closeButtonProps}
          >
            <BiX />
          </NavMobileMenuButton>
        </NavWrapper>
      </DrawerHeader>

      <DrawerBody p="0">
        <Stack direction={"column"} gap={"1"} pt={"6"}>
          {(links || []).map(({ href = "/", children, ...link }) => (
            <Link
              asChild
              fontWeight={"normal"}
              href={href}
              key={href}
              px={"6"}
              py={"4"}
              textStyle={"lg"}
              variant={"plain"}
              w={"full"}
              {...link}
            >
              <Center flex={"1"} gap="6" inline justifyContent={"flex-start"}>
                <Box>{children}</Box>
              </Center>
            </Link>
          ))}
          <Stack gap={6} p={"6"}>
            <Link
              asChild={true}
              href={"https://app.mutuals.finance"}
              target="_blank"
            >
              <Button
                colorPalette={"brand"}
                size="xl"
                variant={"gradient"}
                w={"full"}
              >
                Launch App
              </Button>
            </Link>

            <Separator />

            <Stack direction="row" gap={6} justify={"space-between"}>
              <Group>
                {socialLinks.map(({ children, href: _href, ...props }) => (
                  <IconButton
                    key={props["aria-label"]}
                    size={"sm"}
                    variant="ghost"
                    {...props}
                  >
                    {children}
                  </IconButton>
                ))}
              </Group>
              <ColorModeButton variant="ghost" />
            </Stack>
          </Stack>
        </Stack>
      </DrawerBody>
    </DrawerContent>
  );
}
