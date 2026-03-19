import { Form, HStack, Input, InputGroup } from "@mutuals/ui";
import { IoSearch } from "react-icons/io5";

export function TreasurySearchAndCreate() {
  return (
    <HStack alignItems={"center"} gap={"6"} mb={"6"}>
      <Form flex={"1"}>
        <InputGroup startElement={<IoSearch />}>
          <Input id="" placeholder="Search..." />
        </InputGroup>
      </Form>
    </HStack>
  );
}
