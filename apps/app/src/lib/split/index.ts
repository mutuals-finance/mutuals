import { decodePrefixedAddress } from "@/lib/utils";
import { getPoolDetails } from "@splitfi/sdk/server";
import { getMetadata } from "@/lib/split/fetchers";

export * from "./fetchers";

export async function getPoolDetailsFromRouteParams(params: { id: string }) {
  const id = decodePrefixedAddress(params.id);
  const { data } = await getPoolDetails({ variables: { id } });
  const pool = data.split;

  const metaData = await getMetadata(pool?.metaDataUri);
  return { ...pool, metaData };
}
