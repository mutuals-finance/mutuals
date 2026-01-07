import {
  AvatarRoot,
  AvatarRootProps,
  AvatarFallback,
  AvatarImage,
} from "@mutuals/ui";
import Image, { ImageProps } from "next/image";

export type AssetCardLogoProps = AvatarRootProps & {
  alt?: ImageProps["alt"];
  src?: ImageProps["src"];
};

export default function AssetCardLogo({
  src = "",
  alt = "",
  ...props
}: AssetCardLogoProps) {
  const valid = src != "";
  return (
    <AvatarRoot {...props}>
      <AvatarFallback name={alt} />
      {valid && (
        <AvatarImage asChild={true}>
          <Image src={src} alt={alt} width={260} height={260} />
        </AvatarImage>
      )}
    </AvatarRoot>
  );
}
