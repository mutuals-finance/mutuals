import {
  defaultContentType,
  defaultGenerateImageMetadata,
  LogoTransparentImageResponse,
} from "@mutuals/metadata-nextjs";

export function generateImageMetadata() {
  return defaultGenerateImageMetadata();
}

export const contentType = defaultContentType;

export default function Icon({ id }: { id: number }) {
  return new LogoTransparentImageResponse({
    width: id,
    height: id,
  });
}
