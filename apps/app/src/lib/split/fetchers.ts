import { ipfsUrlFromUri } from "src/utils";
import { SplitMetadata } from "@mutuals/graphql-client-nextjs/thegraph";

export const fetcher = <TResponse = unknown>(
  url: string,
): Promise<TResponse> => {
  return fetch(url).then((res) => res.json());
};

export const getMetadata = (uri?: string | null) =>
  fetcher<Partial<SplitMetadata>>(ipfsUrlFromUri(uri || ""));
