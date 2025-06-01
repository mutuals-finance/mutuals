import { IconButton, Icon, type IconButtonProps } from "@mutuals/ui";

interface NavMobileNavbarProps extends IconButtonProps {}

export default function NavMobileMenuButton({
  size = "lg",
  variant = "subtle",
  children,
  ...props
}: NavMobileNavbarProps) {
  return (
    <IconButton size={size} variant={variant} {...props}>
      <Icon w="8" h={"8"}>
        {children}
      </Icon>
    </IconButton>
  );
}
