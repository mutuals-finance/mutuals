import { getPool } from "@mutuals/graphql-client-nextjs/server";
import { notFound } from "next/navigation";

export * from "./fetchers";

export async function getPoolDetailsFromRouteParams(params: { id: string }) {
  //const id = decodePrefixedAddress(params.id);
  console.log("getPoolDetailsFromRouteParams", params);
  const { data } = await getPool({
    variables: { slug: params.id },
  });

  if (!data?.pool) {
    notFound();
  }

  return data.pool;
}
