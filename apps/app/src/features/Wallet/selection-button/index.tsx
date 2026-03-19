import {
  type AvatarProps,
  AvatarRoot,
  Button,
  type ButtonProps,
  Icon,
  type IconProps,
} from "@mutuals/ui";
import NextImage, { type ImageProps } from "next/image";

interface WalletSelectionButtonProps extends Omit<ButtonProps, "name"> {
  icon?: IconProps;
  iconAvatarProps?: AvatarProps;
  image?: Omit<ImageProps, "alt">;
  name?: string;
}

export default function WalletConnectButton({
  name,
  image,
  icon,
  iconAvatarProps,
  ...props
}: WalletSelectionButtonProps) {
  return (
    <Button
      gap={"6"}
      justifyContent={"flex-start"}
      py={"6"}
      size={"2xl"}
      variant="subtle"
      w={"full"}
      {...props}
    >
      {image && (
        <NextImage
          alt={name ?? "unknown"}
          height={"24"}
          width={"24"}
          {...image}
        />
      )}
      {icon && (
        <AvatarRoot variant={"solid"} {...iconAvatarProps}>
          <Icon {...icon} />
        </AvatarRoot>
      )}
      {name}
    </Button>
  );
}
