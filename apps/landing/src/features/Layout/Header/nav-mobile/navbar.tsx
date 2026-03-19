import { type IconButtonProps, Stack } from "@mutuals/ui";
import { AiOutlineMenu } from "react-icons/ai";
import HeaderContainerWrapper, {
  type HeaderContainerWrapperProps,
} from "@/features/layout/header/container-wrapper";
import NavMobileMenuButton from "@/features/layout/header/nav-mobile/menu-button";
import NavWrapper from "@/features/layout/header/nav-wrapper";

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
            <AiOutlineMenu />
          </NavMobileMenuButton>
        </Stack>
      </NavWrapper>
    </HeaderContainerWrapper>
  );
}
