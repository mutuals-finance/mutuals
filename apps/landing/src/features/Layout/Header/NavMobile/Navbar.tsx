import { Box, type IconButtonProps } from "@mutuals/ui";

import NavWrapper, {
  NavWrapperProps,
} from "@/features/Layout/Header/NavWrapper";
import { BiMenuAltLeft } from "react-icons/bi";
import NavMobileMenuButton from "@/features/Layout/Header/NavMobile/MenuButton";

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
        <NavMobileMenuButton aria-label="Toggle Navigation" {...buttonProps}>
          <BiMenuAltLeft />
        </NavMobileMenuButton>
      </Box>
    </NavWrapper>
  );
}
