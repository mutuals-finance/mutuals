import {
  Button,
  Group,
  AbsoluteCenter,
  HStack,
  type LinkProps,
  Link,
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
        <HStack textAlign={"center"} gap="12" justifyContent="center">
          {links.map((props, index) => (
            <NavLink key={index} {...props} />
          ))}
        </HStack>
      </AbsoluteCenter>

      <Group gap={"6"} ml={"auto"}>
        <Link
          href={"https://app.mutuals.finance"}
          target="_blank"
          asChild={true}
        >
          <Button variant="solid" size={"xl"}>
            Launch App
          </Button>
        </Link>
      </Group>
    </NavWrapper>
  );
}
