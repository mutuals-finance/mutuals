import {
  defaultContentType,
  LogoBorderImageResponse,
} from "@mutuals/metadata-nextjs";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = defaultContentType;

export default function Icon() {
  return new LogoBorderImageResponse({
    ...size,
  });
}
