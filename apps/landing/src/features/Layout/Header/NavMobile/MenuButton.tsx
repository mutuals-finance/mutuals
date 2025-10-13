import { IconButton, Icon, type IconButtonProps } from "@mutuals/ui";

interface NavMobileNavbarProps extends IconButtonProps {}

export default function NavMobileMenuButton({
  size = "xl",
  variant = "subtle",
  children,
  ...props
}: NavMobileNavbarProps) {
  return (
    <IconButton size={size} variant={variant} rounded={"4xl"} {...props}>
      <Icon w="6" h={"6"}>
        {children}
      </Icon>
    </IconButton>
  );
}
