import { HStack, InputGroup } from "@mutuals/ui";
import React from "react";
import { IoSearch } from "react-icons/io5";

import Form from "@/components/Form";
import Input from "@/components/Form/Input";

export function TreasurySearchAndCreate() {
  return (
    <HStack mb={"6"} gap={"6"} alignItems={"center"}>
      <Form flex={"1"}>
        <InputGroup startElement={<IoSearch />}>
          <Input hideWrapper={true} placeholder="Search..." />
        </InputGroup>
      </Form>
    </HStack>
  );
}
