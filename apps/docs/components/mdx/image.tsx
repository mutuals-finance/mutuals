import { Box } from "@mutuals/ui";
import Image, { type ImageProps } from "next/image";

export type ImgProps = ImageProps & {
  marginTop?: string;
  aspectRatio?: string;
};

export const Img = (props: ImgProps) => {
  const { height, marginTop = "1.7em", aspectRatio, ...rest } = props;
  return (
    <Box
      height={height}
      aspectRatio={aspectRatio}
      css={{
        overflow: "hidden",
        position: "relative",
        marginTop,
        marginBottom: "1.7em",
        borderRadius: "lg",
        boxShadow: "inset",
      }}
    >
      <Image {...rest} />
    </Box>
  );
};
