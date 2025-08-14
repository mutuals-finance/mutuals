import { ipfsUrlFromUri } from "src/utils";

export const fetcher = <TResponse = unknown>(
  url: string,
): Promise<TResponse> => {
  return fetch(url).then((res) => res.json());
};

export const getMetadata = (uri?: string | null) =>
  fetcher<Partial<any>>(ipfsUrlFromUri(uri || ""));
