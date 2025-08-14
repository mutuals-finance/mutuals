import { Container, Heading } from "@mutuals/ui";
import AuthSiginInCard from "@/features/Auth/SignInCard";
import PoolListContent, {
  PoolListContentProps,
} from "@/features/Pool/List/Content";

export type PoolListProps = PoolListContentProps;

export default function PoolList(query: PoolListProps) {
  const { data } = query;

  return (
    <Container maxW={"7xl"}>
      <Heading as={"h2"} textStyle={"3xl"} mb={"3"}>
        Payment Pools
      </Heading>
      {!data?.viewer ? (
        <AuthSiginInCard
          actionProps={{ children: "Create payment pool" }}
          description={
            "To view and manage your payment pools you must sign in to your account."
          }
        />
      ) : (
        <PoolListContent {...query} />
      )}
    </Container>
  );
}
