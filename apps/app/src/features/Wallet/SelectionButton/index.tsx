import { AvatarRoot, Button, ButtonProps, Icon, IconProps } from "@mutuals/ui";
import NextImage, { ImageProps } from "next/image";

interface WalletSelectionButtonProps extends Omit<ButtonProps, "name"> {
  name?: string;
  image?: Omit<ImageProps, "alt">;
  icon?: IconProps;
}

export default function WalletConnectButton({
  name,
  image,
  icon,
  ...props
}: WalletSelectionButtonProps) {
  return (
    <Button
      w={"full"}
      size={"2xl"}
      justifyContent={"flex-start"}
      variant="subtle"
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
        <AvatarRoot variant={"solid"}>
          <Icon {...icon} />
        </AvatarRoot>
      )}
      {name}
    </Button>
  );
}
