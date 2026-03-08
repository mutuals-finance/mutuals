import PoolActionWithdraw from "@/features/PoolAction/Withdraw";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Withdraw",
};

export default async function PoolHandleWithdraw({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const queryOptions = { variables: { slug: (await params).id } };

  return <PoolActionWithdraw queryOptions={queryOptions} />;
}
