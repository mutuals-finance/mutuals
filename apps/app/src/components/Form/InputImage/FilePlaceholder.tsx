import { Icon } from "@mutuals/ui";
import { Center, Text } from "@mutuals/ui";
import { IoImage } from "react-icons/io5";

import { BaseFieldProps } from "../types";

type FilePlaceholderProps = {
  placeholder: BaseFieldProps["placeholder"];
};

export default function FilePlaceholder({ placeholder }: FilePlaceholderProps) {
  return (
    <>
      <Center pointerEvents={"none"} textAlign={"center"} p={"3"}>
        <Icon
          position={"absolute"}
          opacity={"0.5"}
          right={"3"}
          bottom="3"
          as={IoImage}
        />
        {!!placeholder && <Text>{placeholder}</Text>}
      </Center>
    </>
  );
}
