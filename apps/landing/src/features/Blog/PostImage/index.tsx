import { AspectRatio, AspectRatioProps, Show } from "@mutuals/ui";
import NextImage from "next/image";
import { Media } from "@mutuals/payload/payload-types";

export type BlogPostImageProps = AspectRatioProps & {
  image?: number | Media | null;
};

export default function BlogPostImage({ image, ...props }: BlogPostImageProps) {
  return (
    <Show when={image && typeof image != "number" && "url" in image}>
      <AspectRatio
        ratio={16 / 9}
        rounded={"2xl"}
        overflow={"hidden"}
        {...props}
      >
        <NextImage
          src={(image as Media).url!}
          alt={(image as Media).alt}
          fill={true}
          style={{ objectFit: "cover" }}
          sizes="450px"
        />
      </AspectRatio>
    </Show>
  );
}
