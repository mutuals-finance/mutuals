import { Button, Center, EmptyStateCard, Icon, Link } from "@mutuals/ui";
import { HiViewGridAdd } from "react-icons/hi";

export default function PoolListEmptyState() {
  return (
    <EmptyStateCard
      description="Add a new payment pool to get started"
      icon={
        <Center bg={"bg.muted"} color={"fg"} p={"4"} rounded={"xl"}>
          <Icon size={"md"}>
            <HiViewGridAdd />
          </Icon>
        </Center>
      }
      title="Start receiving funds"
    >
      <Link asChild={true} href={"/pool/new"}>
        <Button size={"sm"} variant={"solid"}>
          Create Payment Pool
        </Button>
      </Link>
      <Link asChild={true} href={"/pool/demo"}>
        <Button size={"sm"} variant={"subtle"}>
          View Demo Pool
        </Button>
      </Link>
    </EmptyStateCard>
  );
}
