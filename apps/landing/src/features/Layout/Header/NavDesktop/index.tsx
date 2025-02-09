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
        <HStack textAlign={"center"} gap="6" justifyContent="center">
          {links.map((props, index) => (
            <NavLink key={index} {...props} />
          ))}
        </HStack>
      </AbsoluteCenter>

      <Group gap={"6"} ml={"auto"}>
        <Button variant={"surface"}>Reach out</Button>
        <Button variant={"solid"}>Launch app</Button>
      </Group>
    </NavWrapper>
  );
}
