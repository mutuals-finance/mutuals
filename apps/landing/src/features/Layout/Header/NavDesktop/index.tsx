import {
  Button,
  Group,
  AbsoluteCenter,
  HStack,
  type LinkProps,
} from "@mutuals/ui";

import NavLink from "@/features/Layout/Header/NavLink";
import NavWrapper, {
  NavWrapperProps,
} from "@/features/Layout/Header/NavWrapper";

interface NavDesktopProps extends NavWrapperProps {
  links?: LinkProps[];
}
export default function NavDesktop({ links = [], ...props }: NavDesktopProps) {
  return (
    <NavWrapper {...props}>
      <AbsoluteCenter>
        <HStack
          textAlign={"center"}
          gap="12"
          justifyContent="center"
          bgColor={"bg/90"}
          style={{ backdropFilter: "blur(4px)" }}
          border={"1px solid"}
          borderColor={"border"}
          px={{ base: "2", lg: "6" }}
          py={{ base: "1", lg: "4" }}
          rounded={"lg"}
          overflow={"hidden"}
        >
          {links.map((props, index) => (
            <NavLink key={index} {...props} />
          ))}
        </HStack>
      </AbsoluteCenter>

      <Group gap={"6"} ml={"auto"}>
        <Button variant="solid" size={"xl"}>
          Launch App
        </Button>
      </Group>
    </NavWrapper>
  );
}
