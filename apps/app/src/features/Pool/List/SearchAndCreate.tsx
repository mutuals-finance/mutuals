import { HStack, InputGroup, Input, Form } from "@mutuals/ui";
import { IoSearch } from "react-icons/io5";

export function TreasurySearchAndCreate() {
  return (
    <HStack mb={"6"} gap={"6"} alignItems={"center"}>
      <Form flex={"1"}>
        <InputGroup startElement={<IoSearch />}>
          <Input id="" placeholder="Search..." />
        </InputGroup>
      </Form>
    </HStack>
  );
}
