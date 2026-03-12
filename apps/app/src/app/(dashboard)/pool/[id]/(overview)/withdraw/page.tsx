import PoolActionWithdraw from "@/features/PoolAction/Withdraw";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Withdraw",
};

export default async function PoolHandleWithdraw({
  params,
}: PageProps<"/pool/[id]/withdraw">) {
  const { id: slug } = await params;
  const queryOptions = { variables: { slug } };

  return <PoolActionWithdraw queryOptions={queryOptions} />;
}
