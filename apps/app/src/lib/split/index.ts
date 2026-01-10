import { getPool } from "@mutuals/graphql-client-nextjs/server";
import { Pool, PoolStatus } from "@mutuals/graphql-client-nextjs";
import { notFound } from "next/navigation";

export * from "./fetchers";

export async function getPoolDetailsFromRouteParams(params: { id: string }) {
  //const id = decodePrefixedAddress(params.id);
  if (params.id == "example") {
    const defaultPool: Pool = {
      id: "",
      name: "Example Payment Pool",
      description:
        "An example payment pool used for demonstration purposes. Do not use in scenarios requiring real funds.",
      slug: "example",
      dbid: "",
      donationBps: 100,
      image: "",
      owner: { id: "", dbid: "" },
      status: PoolStatus.Active,
      createdAt: new Date(0).toISOString(),
      updatedAt: new Date(0).toISOString(),
    };

    return defaultPool;
  }

  const { data } = await getPool({
    variables: { slug: params.id },
  });

  if (!data?.pool) {
    notFound();
  }

  return data?.pool;
}
