import { IconButton, Box, type IconButtonProps } from "@mutuals/ui";

import NavWrapper, { NavWrapperProps } from "@/layout/Header/NavWrapper";
import { VscMenu } from "react-icons/vsc";

interface NavMobileNavbarProps extends NavWrapperProps {
  buttonProps?: Omit<IconButtonProps, "aria-label">;
}

export default function NavMobileNavbar({
  buttonProps,
  ...props
}: NavMobileNavbarProps) {
  return (
    <NavWrapper {...props}>
      <Box ml={"auto"}>
        <IconButton
          fontSize={"2xl"}
          variant={"ghost"}
          aria-label="Toggle Navigation"
          {...buttonProps}
        >
          <VscMenu />
        </IconButton>
      </Box>
    </NavWrapper>
  );
}
