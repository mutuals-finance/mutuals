import {
  AvatarProps,
  AvatarRoot,
  Button,
  ButtonProps,
  Icon,
  IconProps,
} from "@mutuals/ui";
import NextImage, { ImageProps } from "next/image";

interface WalletSelectionButtonProps extends Omit<ButtonProps, "name"> {
  name?: string;
  image?: Omit<ImageProps, "alt">;
  iconAvatarProps?: AvatarProps;
  icon?: IconProps;
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
      w={"full"}
      size={"2xl"}
      justifyContent={"flex-start"}
      variant="subtle"
      py={"6"}
      gap={"6"}
      {...props}
    >
      {image && (
        <NextImage
          alt={name ?? "unknown"}
          width={"24"}
          height={"24"}
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
