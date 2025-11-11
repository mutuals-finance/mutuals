import { Stack, type IconButtonProps } from "@mutuals/ui";

import NavWrapper from "@/features/Layout/Header/NavWrapper";
import { BiMenuAltLeft } from "react-icons/bi";
import NavMobileMenuButton from "@/features/Layout/Header/NavMobile/MenuButton";
import HeaderContainerWrapper, {
  HeaderContainerWrapperProps,
} from "@/features/Layout/Header/ContainerWrapper";
import { VscMenu } from "react-icons/vsc";

interface NavMobileNavbarProps extends HeaderContainerWrapperProps {
  buttonProps?: Omit<IconButtonProps, "aria-label">;
}

export default function NavMobileNavbar({
  buttonProps,
  ...props
}: NavMobileNavbarProps) {
  return (
    <HeaderContainerWrapper
      bgColor={"bg/25"}
      css={{
        backdropFilter: "blur(12px)",
      }}
      {...props}
    >
      <NavWrapper>
        <Stack h={"4.6rem"} justifyContent={"center"}>
          <NavMobileMenuButton aria-label="Toggle Navigation" {...buttonProps}>
            <VscMenu />
          </NavMobileMenuButton>
        </Stack>
      </NavWrapper>
    </HeaderContainerWrapper>
  );
}
