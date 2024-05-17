import { PropsWithChildren } from "react";
import { decodePrefixedAddress } from "@/lib/utils";
import { getMetadata, getPoolDetails } from "@/lib/split";
import { useFragment } from "@/lib/graphql/thegraph/__generated__";
import { splitBaseFragment } from "@/lib/graphql/thegraph/fragments";
import PoolPageShell from "@/app/(dashboard)/pool/[id]/PoolPageShell";

export default async function PoolContentLayout({
  children,
  params,
}: PropsWithChildren<{
  params: { id: string };
}>) {
  const id = decodePrefixedAddress(params.id);
  const { data } = await getPoolDetails({ variables: { id } });
  const pool = useFragment(splitBaseFragment, data.split);
  const metaData = await getMetadata(pool?.metaDataUri);

  const props = {
    pool,
    metaData,
  };

  return <PoolPageShell {...props}>{children}</PoolPageShell>;
}
