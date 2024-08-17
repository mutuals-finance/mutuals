import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  type DrawerProps,
  ListItem,
  type ListItemProps,
  Button,
  type LinkProps,
  Link,
  Stack,
  StackDivider,
  Box,
} from "@mutuals/ui";
import { PropsWithChildren } from "react";
import NavWrapper from "@/layout/Header/NavWrapper";

interface MobileNavProps
  extends Omit<DrawerProps, "children">,
    PropsWithChildren {
  links?: LinkProps[];
}

export default function NavMobileDrawer({ links, ...props }: MobileNavProps) {
  return (
    <Drawer size={"full"} {...props}>
      <DrawerContent gap={"0"}>
        <DrawerHeader p={"0"}>
          <NavWrapper
            justifyContent="space-between"
            borderBottom={"1px solid"}
            borderColor={"border.1"}
          >
            <DrawerCloseButton
              position={"static"}
              display={"block"}
              variant={"transparent"}
              fontSize="xs"
              color={"color.1"}
            />
          </NavWrapper>
        </DrawerHeader>

        <DrawerBody p="0">
          <Stack
            direction={"column"}
            gap={"0"}
            spacing={"0"}
            divider={<StackDivider />}
          >
            {(links || []).map(({ ...link }, index) => (
              <Link key={index} p={"6"} w={"full"} fontSize={"lg"} {...link} />
            ))}
            <Box p={"6"}>
              <Button colorScheme={"primary"} size="lg" w={"full"}>
                Launch App
              </Button>
            </Box>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
