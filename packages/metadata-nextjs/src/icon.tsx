import { ImageResponse as NextImageResponse } from "next/og";
import { ImageResponseOptions } from "next/server";
import renderBaseIcon from "./base-icon";

export const iconSizes = [48, 72, 96, 144, 192, 512, 1024];

export const defaultContentType = "image/png";

export function defaultGenerateImageMetadata() {
  return iconSizes.map((size) => ({
    id: size,
    contentType: "image/png",
    size: { width: size, height: size },
  }));
}

export class DefaultImageResponse extends NextImageResponse {
  constructor(options?: ImageResponseOptions) {
    super(
      renderBaseIcon(
        {
          style: {
            backgroundColor: "#FAFAFA",
            borderColor: "transparent",
          },
        },
        options,
      ),
      options,
    );
  }
}

export class LogoBorderImageResponse extends NextImageResponse {
  constructor(options?: ImageResponseOptions) {
    super(
      renderBaseIcon(
        {
          style: {
            borderColor: "#D4D4D8",
          },
        },
        options,
      ),
      options,
    );
  }
}
