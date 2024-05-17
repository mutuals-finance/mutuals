import { ipfsUrlFromUri } from "@/lib/utils";

export const fetcher = <TResponse = unknown>(url: string): Promise<TResponse> =>
  fetch(url).then((res) => res.json());

export const getMetadata = (uri?: string | null) =>
  fetcher<{ name: string; description: string; image: string }>(
    ipfsUrlFromUri(uri || ""),
  );
