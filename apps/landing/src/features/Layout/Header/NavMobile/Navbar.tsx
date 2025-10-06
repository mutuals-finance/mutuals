import { Stack, type IconButtonProps } from "@mutuals/ui";

import NavWrapper from "@/features/Layout/Header/NavWrapper";
import { BiMenuAltLeft } from "react-icons/bi";
import NavMobileMenuButton from "@/features/Layout/Header/NavMobile/MenuButton";
import HeaderContainerWrapper, {
  HeaderContainerWrapperProps,
} from "@/features/Layout/Header/ContainerWrapper";

interface NavMobileNavbarProps extends HeaderContainerWrapperProps {
  buttonProps?: Omit<IconButtonProps, "aria-label">;
}

export default function NavMobileNavbar({
  buttonProps,
  ...props
}: NavMobileNavbarProps) {
  return (
    <HeaderContainerWrapper {...props}>
      <NavWrapper>
        <Stack h={"20"} justifyContent={"center"}>
          <NavMobileMenuButton aria-label="Toggle Navigation" {...buttonProps}>
            <BiMenuAltLeft />
          </NavMobileMenuButton>
        </Stack>
      </NavWrapper>
    </HeaderContainerWrapper>
  );
}
