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
  Icon,
  Stack,
  StackSeparator,
  CloseButton,
  ButtonProps,
  Group,
  IconButton,
  ColorModeButton,
} from "@mutuals/ui";
import { PropsWithChildren } from "react";
import NavWrapper from "@/features/Layout/Header/NavWrapper";
import { socialLinks } from "@/features/Layout/links";
import { IoArrowForward } from "react-icons/io5";

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
        >
          <CloseButton
            fontSize={"2xl"}
            aria-label="Close Navigation"
            {...closeButtonProps}
          />
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
              fontSize={"lg"}
              asChild
              focusRing={"none"}
              {...link}
            >
              <Center
                inline
                gap="6"
                flex={"1"}
                justifyContent={"space-between"}
              >
                <Box>{children}</Box>
                <Icon color={"fg.subtle"}>
                  <IoArrowForward />
                </Icon>
              </Center>
            </Link>
          ))}
          <Stack gap={6} p={"6"}>
            <Button variant={"subtle"} size="xl" w={"full"}>
              Reach out
            </Button>
            <Button variant="solid" size="xl" w={"full"}>
              Launch App
            </Button>
            <Stack direction="row" gap={6} justify={"space-between"}>
              <Group>
                {socialLinks.map(({ children, href: _href, ...props }) => (
                  <IconButton
                    size={"sm"}
                    variant="outline"
                    key={props["aria-label"]}
                    {...props}
                  >
                    {children}
                  </IconButton>
                ))}
              </Group>
              <ColorModeButton variant="outline" />
            </Stack>
          </Stack>
        </Stack>
      </DrawerBody>
    </DrawerContent>
  );
}
