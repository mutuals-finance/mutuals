import {
  AvatarRoot,
  AvatarRootProps,
  AvatarFallback,
  AvatarImage,
} from "@mutuals/ui";
import { getImageProps, ImageProps } from "next/image";
import { ComponentProps } from "react";

export type PoolCardLogoProps = AvatarRootProps & {
  alt?: ImageProps["alt"];
  src?: ImageProps["src"];
};

export default function PoolCardLogo({
  src = "",
  alt = "",
  ...props
}: PoolCardLogoProps) {
  const valid = src !== "";

  const nextImage = valid
    ? getImageProps({
        src,
        alt,
        width: 20,
        height: 20,
        priority: true,
      })
    : null;

  return (
    <AvatarRoot {...props}>
      <AvatarFallback name={alt as string} />
      {valid && nextImage && (
        <AvatarImage
          src={nextImage.props.src}
          {...(nextImage.props as ComponentProps<"img">)}
          style={{
            ...nextImage.props.style,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}
    </AvatarRoot>
  );
}
