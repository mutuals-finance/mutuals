import { ImageProps } from "@mutuals/ui";

export function ipfsResolveData(
  data: ImageProps["src"] = "bafkreidflp6nlbvvad7w5v3cxue4bvuvcc37wggdklay3wmvj56le2sqsu",
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
  const cid = uri.replace(/https?:\/\/|ipfs?:\/\//i, "").split(".")[0] ?? "";
  return `https://${cid}.ipfs.w3s.link`;
}
