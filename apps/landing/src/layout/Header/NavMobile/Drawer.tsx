import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerCloseTrigger,
  Button,
  type LinkProps,
  Link,
  Stack,
  Box,
  DrawerRoot,
  StackSeparator,
} from "@mutuals/ui";
import { PropsWithChildren } from "react";
import NavWrapper from "@/layout/Header/NavWrapper";

interface MobileNavProps
  extends Omit<Drawer.RootProps, "children">,
    PropsWithChildren {
  links?: LinkProps[];
}

export default function NavMobileDrawer({ links, ...props }: MobileNavProps) {
  return (
    <DrawerRoot size={"full"} {...props}>
      <DrawerContent gap={"0"}>
        <DrawerHeader p={"0"}>
          <NavWrapper
            justifyContent="space-between"
            borderBottom={"1px solid"}
            borderColor={"border.1"}
          >
            <DrawerCloseTrigger
              position={"static"}
              display={"block"}
              variant={"transparent"}
              fontSize="xs"
              color={"color.1"}
            />
          </NavWrapper>
        </DrawerHeader>

        <DrawerBody p="0">
          <Stack direction={"column"} gap={"0"} separator={<StackSeparator />}>
            {(links || []).map(({ ...link }, index) => (
              <Link key={index} p={"6"} w={"full"} fontSize={"lg"} {...link} />
            ))}
            <Box p={"6"}>
              <Button colorPalette={"primary"} size="lg" w={"full"}>
                Launch App
              </Button>
            </Box>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
}
