import {
  defaultContentType,
  defaultGenerateImageMetadata,
  DefaultImageResponse,
} from "@mutuals/metadata-nextjs";

export function generateImageMetadata() {
  return defaultGenerateImageMetadata();
}

export const contentType = defaultContentType;

export default async function Icon(props: { id: Promise<number> }) {
  const id = await props.id;
  return new DefaultImageResponse({
    width: id,
    height: id,
  });
}
