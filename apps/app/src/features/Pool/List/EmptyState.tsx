import { EmptyState, Group, Button, Link } from "@mutuals/ui";
import { HiViewGridAdd } from "react-icons/hi";

export default function PoolListEmptyState() {
  return (
    <EmptyState
      icon={<HiViewGridAdd />}
      title="Start receiving funds"
      description="Add a new payment pool to get started"
      size={"sm"}
    >
      <Group>
        <Link asChild={true} href={"/pool/new"}>
          <Button size={"sm"}>Create Payment Pool</Button>
        </Link>
        <Button variant="outline" size={"sm"}>
          Import
        </Button>
      </Group>
    </EmptyState>
  );
}
