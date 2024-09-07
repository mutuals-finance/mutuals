"use client";

import {
  Icon,
  InputGroup,
  InputLeftElement,
  Show,
  Stack,
  useColorModeValue,
  SplitFiLogo,
} from "@mutuals/ui";
import React from "react";
import { IoSearch } from "react-icons/io5";

import Form from "@/components/Form";
import Input from "@/components/Form/Input";

import Chain from "./Chain";
import User from "./User";
import MobileMenuButton from "./MobileMenuButton";

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
      align={"center"}
      justify={"space-between"}
      gap={{ base: "3", lg: "12" }}
      borderBottom="1px solid"
      borderColor={"border.1"}
      bg={"bg.1"}
      direction={"row"}
    >
      <Show above={"lg"}>
        <Form>
          <InputGroup size={"sm"}>
            <InputLeftElement pointerEvents="none">
              <Icon
                as={IoSearch}
                color={useColorModeValue("gray.400", "gray.600")}
              />
            </InputLeftElement>
            <Input hideWrapper={true} placeholder="Search..." pl={"10"} />
          </InputGroup>
        </Form>
      </Show>

      <Show below="lg">
        <SplitFiLogo w={"24"} mr={"auto"} />
      </Show>

      <Stack direction={"row"} gap={6} ml={"auto"}>
        <Chain />
        <User />
      </Stack>
      <Show below="lg">
        <MobileMenuButton />
      </Show>
    </Stack>
  );
}
