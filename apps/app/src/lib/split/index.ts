import { getPool } from "@mutuals/graphql-client-nextjs/server";
import { Pool, PoolStatus } from "@mutuals/graphql-client-nextjs";

export * from "./fetchers";

export async function getPoolDetailsFromRouteParams(params: { id: string }) {
  //const id = decodePrefixedAddress(params.id);
  const { data } = await getPool({
    variables: { slug: params.id },
  });

  const defaultPool: Pool = {
    id: "",
    name: "Example Payment Pool",
    description:
      "An example payment pool used for demonstration purposes. Do not use in scenarios requiring real funds.",
    slug: "example",
    dbid: "",
    donationBps: 0,
    image: "",
    owner: { id: "", dbid: "" },
    status: PoolStatus.Active,
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
  };

  const pool = data?.pool ?? defaultPool;
  /*
  if (!data?.pool) {
    notFound();
  }
*/

  return pool;
}
