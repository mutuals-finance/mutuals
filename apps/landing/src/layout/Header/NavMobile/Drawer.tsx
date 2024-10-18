import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Button,
  type LinkProps,
  Link,
  Stack,
  Box,
  StackSeparator,
  CloseButton,
  ButtonProps,
  DrawerRoot,
} from "@mutuals/ui";
import { PropsWithChildren } from "react";
import NavWrapper from "@/layout/Header/NavWrapper";

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
              {children}
            </Link>
          ))}
          <Box p={"6"}>
            <Button size="lg" w={"full"}>
              Launch App
            </Button>
          </Box>
        </Stack>
      </DrawerBody>
    </DrawerContent>
  );
}
