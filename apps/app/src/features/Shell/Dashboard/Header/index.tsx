import { Form, InputGroup, Stack, MutualsLogo, Input } from "@mutuals/ui";
import { IoSearch } from "react-icons/io5";

import Chain from "./Chain";
import User from "./User";

export default function ShellDashboardHeader() {
  return (
    <Stack
      as="header"
      position="sticky"
      h={{ base: "5rem", md: "3.4rem" }}
      px={{ base: "6", lg: "12" }}
      py={"6"}
      zIndex={"50"}
      top={"0"}
      left={"0"}
      w={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={{ base: "3", lg: "12" }}
      borderBottomWidth="1px"
      borderColor={"border"}
      bg={"bg"}
      direction={"row"}
    >
      <Form hideBelow={"lg"}>
        <InputGroup startElement={<IoSearch />}>
          <Input size={"sm"} placeholder="Search..." />
        </InputGroup>
      </Form>

      <MutualsLogo hideFrom={"lg"} w={"24"} mr={"auto"} />

      <Stack direction={"row"} gap={4} ml={"auto"}>
        <Chain />
        <User />
      </Stack>
    </Stack>
  );
}
