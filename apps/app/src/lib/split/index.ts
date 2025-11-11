import { getPoolById } from "@mutuals/graphql-client-nextjs/server";
import { notFound } from "next/navigation";
import { Pool } from "@mutuals/graphql-client-nextjs";

export * from "./fetchers";

export async function getPoolDetailsFromRouteParams(params: { id: string }) {
  //const id = decodePrefixedAddress(params.id);
  const { data } = await getPoolById({ variables: params });

  if (!data || !("poolById" in data)) {
    notFound();
  }

  const pool = data.poolById;

  return pool as Pool;
}
