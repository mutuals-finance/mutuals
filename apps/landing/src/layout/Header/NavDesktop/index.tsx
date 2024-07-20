import { Button, HStack, Box, type LinkProps } from "@splitfi/ui";

import NavLink from "@/layout/Header/NavLink";
import NavWrapper, { NavWrapperProps } from "@/layout/Header/NavWrapper";

interface NavDesktopProps extends NavWrapperProps {
  links?: LinkProps[];
}
export default function NavDesktop({ links = [], ...props }: NavDesktopProps) {
  return (
    <NavWrapper {...props}>
      <HStack ml={"auto"} spacing="12" justify="center">
        {links.map((props, index) => (
          <NavLink key={index} {...props} />
        ))}
      </HStack>

      <Box>
        <Button variant="blackWhite">Launch App</Button>
      </Box>
    </NavWrapper>
  );
}
