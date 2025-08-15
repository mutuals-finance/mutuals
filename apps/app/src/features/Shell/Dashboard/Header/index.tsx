"use client";

import {
  Form,
  InputGroup,
  Stack,
  MutualsLogo,
  Input,
  AbsoluteCenter,
  IconButton,
  Icon,
  type UseDisclosureProps,
} from "@mutuals/ui";
import { IoSearch } from "react-icons/io5";

import Chain from "./Chain";
import User from "./User";
import { VscMenu } from "react-icons/vsc";

export type ShellDashboardHeaderProps = UseDisclosureProps;

export default function ShellDashboardHeader({
  onToggle,
}: ShellDashboardHeaderProps) {
  return (
    <Stack
      as="header"
      position="sticky"
      h={{ base: "4rem", md: "4rem" }}
      px={{ base: "6", lg: "12" }}
      py={"6"}
      zIndex={"50"}
      top={"0"}
      left={"0"}
      w={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={{ base: "2", lg: "12" }}
      borderBottomWidth="1px"
      borderColor={"border"}
      bg={"bg"}
      direction={"row"}
    >
      <Stack direction={"row"} gap={4} alignItems={"center"}>
        <MutualsLogo w={"24"} />

        <IconButton
          size={"sm"}
          aria-label={"Toggle Sidebar"}
          variant={"ghost"}
          onClick={onToggle}
        >
          <Icon size={"md"}>
            <VscMenu />
          </Icon>
        </IconButton>
      </Stack>

      <AbsoluteCenter>
        <Form hideBelow={"lg"}>
          <InputGroup startElement={<IoSearch />}>
            <Input size={"sm"} placeholder="Search..." />
          </InputGroup>
        </Form>
      </AbsoluteCenter>

      <Stack direction={"row"} gap={4}>
        <Chain />
        <User />
      </Stack>
    </Stack>
  );
}
