import type { ImageProps } from "@mutuals/ui";

const IPFS_URL_RE = /https?:\/\/|ipfs?:\/\//i;

export function ipfsResolveData(
  data: ImageProps["src"] = "bafkreidflp6nlbvvad7w5v3cxue4bvuvcc37wggdklay3wmvj56le2sqsu"
) {
  switch (typeof data) {
    case "string":
      return ipfsUrlFromUri(data);
    case "object":
      return data as ImageProps["src"];
    default:
      return "";
  }
}

export function ipfsUrlFromUri(uri: string) {
  const cid = uri.replace(IPFS_URL_RE, "").split(".")[0] ?? "";
  return `https://${cid}.ipfs.w3s.link`;
}
