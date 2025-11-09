import {
  defaultContentType,
  defaultGenerateImageMetadata,
  DefaultImageResponse,
} from "@mutuals/metadata-nextjs";

export function generateImageMetadata() {
  return defaultGenerateImageMetadata();
}

export const contentType = defaultContentType;

export default async function Icon(params: { id: Promise<number> }) {
  const id = await params.id;
  return new DefaultImageResponse({
    width: id,
    height: id,
  });
}
