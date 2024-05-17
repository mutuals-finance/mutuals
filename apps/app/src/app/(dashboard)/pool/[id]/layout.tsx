import { PropsWithChildren } from "react";

interface PoolSettingsLayoutProps {
  params: { id: string };
}

export default async function PoolDetailsLayout({
  children,
}: PropsWithChildren<PoolSettingsLayoutProps>) {
  /*
  const id = decodePrefixedAddress(params.id);
  const { data } = await getPoolDetails({ variables: { id } });
  const pool = useFragment(splitBaseFragment, data.split);
  const metaData = await getMetadata(pool?.metaDataUri);

  const props = {
    pool,
    metaData,
  };
*/

  return <>{children}</>;
}
