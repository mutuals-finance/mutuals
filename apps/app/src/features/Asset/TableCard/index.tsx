import ContentCard, { type ContentCardProps } from "@/components/ContentCard";
import {
  type GetPoolWithTokensOptions,
  getPoolWithTokens,
} from "@mutuals/graphql-client-nextjs/server";
import { AssetItem, AssetTableProps } from "@/features/Asset/types";
import {
  ConditionalValue,
  Button,
  Center,
  EmptyState,
  Wrap,
  Icon,
  Link,
} from "@mutuals/ui";
import AssetTable from "@/features/Asset/Table";
import { RiTokenSwapLine } from "react-icons/ri";

export interface AssetTableCardProps extends Omit<AssetTableProps, "assets"> {
  cardProps?: ContentCardProps;
  size?: ConditionalValue<"sm" | "md" | "lg" | undefined>;
  queryOptions?: GetPoolWithTokensOptions;
}

export default async function AssetTableCard({
  cardProps = { title: "Assets" },
  size = "sm",
  tableProps,
  queryOptions,
  ...props
}: AssetTableCardProps) {
  const { data, error } = await getPoolWithTokens(queryOptions);
  console.log("getPoolWithTokens data", data);
  if (error || !data?.pool || "message" in data.pool) {
    return null;
  }

  const assets: AssetItem[] =
    data.pool.balance.tokens.edges.map((edge) => edge.node) ?? [];

  return (
    <ContentCard
      {...cardProps}
      title={cardProps.title}
      bodyProps={{ p: "0", ...cardProps.bodyProps }}
    >
      {assets.length > 0 ? (
        <AssetTable
          assets={assets}
          tableProps={{ size, ...tableProps }}
          {...props}
        />
      ) : (
        <EmptyState
          p={"12"}
          icon={
            <Center bg={"bg.muted"} color={"fg"} p={"4"} rounded={"xl"}>
              <Icon size={"md"}>
                <RiTokenSwapLine />
              </Icon>
            </Center>
          }
          title="No assets found"
          description="Start by depositing assets into your payment pool"
          size={"sm"}
        >
          <Wrap justifyContent={"center"}>
            <Link asChild={true} href={`/pool/${data.pool.slug}/deposit`}>
              <Button size={"sm"} variant={"solid"}>
                Deposit to Payment Pool
              </Button>
            </Link>
            <Link asChild={true} href={`/pool/${data.pool.slug}/deposit`}>
              <Button size={"sm"} variant={"subtle"}>
                Deposit
              </Button>
            </Link>
          </Wrap>
        </EmptyState>
      )}
    </ContentCard>
  );
}
