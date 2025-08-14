import { EmptyState, Group, Button } from "@mutuals/ui";
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
        <Button size={"sm"}>Create Payment Pool</Button>
        <Button variant="outline" size={"sm"}>
          Import
        </Button>
      </Group>
    </EmptyState>
  );
}
