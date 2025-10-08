import { ImageResponse as NextImageResponse } from "next/og";
import { ImageResponseOptions } from "next/server";
import renderBaseIcon from "./base-icon";

export const iconSizes = [96, 144, 192, 256, 512, 1024];

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
      renderBaseIcon({
        style: {
          color: "#09090B",
          backgroundColor: "#FAFAFA",
          borderRadius: "100%",
          padding: "18%",
        },
      }),
      options,
    );
  }
}

export class LogoTransparentImageResponse extends NextImageResponse {
  constructor(options?: ImageResponseOptions) {
    super(
      renderBaseIcon({
        style: {
          color: "#09090B",
          backgroundColor: "transparent",
        },
      }),
      options,
    );
  }
}
