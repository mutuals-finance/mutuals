import { Button, HStack, Box, type LinkProps } from "@mutuals/ui";

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
      <HStack ml={"auto"} gap="6" justify="center">
        {links.map((props, index) => (
          <NavLink key={index} {...props} />
        ))}
      </HStack>

      <Box>
        <Button variant={"subtle"}>Launch App</Button>
      </Box>
    </NavWrapper>
  );
}