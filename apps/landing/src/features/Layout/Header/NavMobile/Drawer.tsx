import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Button,
  type LinkProps,
  Link,
  Box,
  Center,
  Stack,
  StackSeparator,
  ButtonProps,
  Group,
  IconButton,
  ColorModeButton,
} from "@mutuals/ui";
import { PropsWithChildren } from "react";
import NavWrapper from "@/features/Layout/Header/NavWrapper";
import { socialLinks } from "@/features/Layout/links";
import NavMobileMenuButton from "@/features/Layout/Header/NavMobile/MenuButton";
import { BiX } from "react-icons/bi";

interface MobileNavProps
  extends Omit<Drawer.ContentProps, "children">,
    PropsWithChildren {
  links?: LinkProps[];
  closeButtonProps?: ButtonProps;
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
          justifyContent="space-between"
          borderBottomWidth={"1px"}
          borderColor={"border"}
          h={"20"}
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
        <Stack direction={"column"} gap={"0"} separator={<StackSeparator />}>
          {(links || []).map(({ href = "/", children, ...link }, index) => (
            <Link
              key={index}
              href={href}
              p={"6"}
              w={"full"}
              textStyle={"xl"}
              asChild
              focusRing={"none"}
              {...link}
            >
              <Center inline gap="6" flex={"1"} justifyContent={"flex-start"}>
                <Box>{children}</Box>
              </Center>
            </Link>
          ))}
          <Stack gap={6} p={"6"}>
            <Link
              href={"https://app.mutuals.finance"}
              target="_blank"
              asChild={true}
            >
              <Button variant="surface" size="2xl" w={"full"}>
                Launch App
              </Button>
            </Link>

            <Stack direction="row" gap={6} justify={"space-between"}>
              <Group>
                {socialLinks.map(({ children, href: _href, ...props }) => (
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
              <ColorModeButton variant="ghost" />
            </Stack>
          </Stack>
        </Stack>
      </DrawerBody>
    </DrawerContent>
  );
}
