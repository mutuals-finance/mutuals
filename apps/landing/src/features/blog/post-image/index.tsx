import type { Media } from "@mutuals/payload/payload-types";
import { AspectRatio, type AspectRatioProps, Show } from "@mutuals/ui";
import NextImage from "next/image";

export type BlogPostImageProps = AspectRatioProps & {
  image?: number | Media | null;
};

export default function BlogPostImage({ image, ...props }: BlogPostImageProps) {
  return (
    <Show when={image && typeof image !== "number" && "url" in image}>
      <AspectRatio overflow={"hidden"} ratio={16 / 9} rounded={"l3"} {...props}>
        <NextImage
          alt={(image as Media).alt}
          fill={true}
          sizes="450px"
          src={(image as Media).url ?? ""}
          style={{ objectFit: "cover" }}
        />
      </AspectRatio>
    </Show>
  );
}
