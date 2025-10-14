import {
  defaultContentType,
  defaultGenerateImageMetadata,
  DefaultImageResponse,
} from "@mutuals/metadata-nextjs";

export function generateImageMetadata() {
  return defaultGenerateImageMetadata();
}

export const contentType = defaultContentType;

export default function Icon({ id }: { id: number }) {
  return new DefaultImageResponse({
    width: id,
    height: id,
  });
}
