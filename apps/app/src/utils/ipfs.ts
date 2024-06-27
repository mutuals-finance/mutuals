import { ImageProps } from "@splitfi/ui";

export function ipfsResolveData(data?: ImageProps["src"] | null) {
  switch (typeof data) {
    case "string":
      return ipfsUrlFromUri(data);
    case "object":
      return data || "";
    default:
      return "";
  }
}

export function ipfsUrlFromUri(uri: string) {
  const cid = uri.replace(/https?:\/\/|ipfs?:\/\//i, "").split(".")[0] ?? "";
  return `https://${cid}.ipfs.w3s.link`;
}
