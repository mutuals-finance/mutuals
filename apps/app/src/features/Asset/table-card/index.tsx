import {
  type GetPoolWithTokensOptions,
  getPoolWithTokens,
} from "@mutuals/graphql-client-nextjs/server";
import {
  Button,
  Center,
  type ConditionalValue,
  EmptyState,
  Icon,
  Link,
  Wrap,
} from "@mutuals/ui";
import { RiTokenSwapLine } from "react-icons/ri";
import ContentCard, { type ContentCardProps } from "@/components/content-card";
import AssetTable from "@/features/asset/table";
import type { AssetItem, AssetTableProps } from "@/features/asset/types";

export interface AssetTableCardProps extends Omit<AssetTableProps, "assets"> {
  cardProps?: ContentCardProps;
  queryOptions?: GetPoolWithTokensOptions;
  size?: ConditionalValue<"sm" | "md" | "lg" | undefined>;
}

export default async function AssetTableCard({
  cardProps = { title: "Assets" },
  size = "sm",
  tableProps,
  queryOptions,
  ...props
}: AssetTableCardProps) {
  const { data, error } = await getPoolWithTokens(queryOptions);

  if (error || !data?.pool || "message" in data.pool) {
    return null;
  }

  const assets: AssetItem[] =
    data.pool.balance.tokens.edges.map((edge) => edge.node) ?? [];

  return (
    <ContentCard
      {...cardProps}
      bodyProps={{ p: "0", ...cardProps.bodyProps }}
      title={cardProps.title}
    >
      {assets.length > 0 ? (
        <AssetTable
          assets={assets}
          tableProps={{ size, ...tableProps }}
          {...props}
        />
      ) : (
        <EmptyState
          description="Start by depositing assets into your payment pool"
          icon={
            <Center bg={"bg.muted"} color={"fg"} p={"4"} rounded={"xl"}>
              <Icon size={"md"}>
                <RiTokenSwapLine />
              </Icon>
            </Center>
          }
          p={"12"}
          size={"sm"}
          title="No assets found"
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
