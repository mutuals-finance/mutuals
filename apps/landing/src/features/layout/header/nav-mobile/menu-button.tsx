import { Icon, IconButton, type IconButtonProps } from "@mutuals/ui";

interface NavMobileNavbarProps extends IconButtonProps {}

export default function NavMobileMenuButton({
  size = "xl",
  variant = "ghost",
  children,
  ...props
}: NavMobileNavbarProps) {
  return (
    <IconButton size={size} variant={variant} {...props}>
      <Icon h={"6"} w="6">
        {children}
      </Icon>
    </IconButton>
  );
}
