import {
  defaultContentType,
  defaultGenerateImageMetadata,
  LogoBorderImageResponse,
} from "@mutuals/metadata-nextjs";

export function generateImageMetadata() {
  return defaultGenerateImageMetadata();
}

export const contentType = defaultContentType;

export default function Icon({ id }: { id: number }) {
  return new LogoBorderImageResponse({
    width: id,
    height: id,
  });
}
