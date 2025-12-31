import { HStack, Icon } from "@mutuals/ui";
import { IoBookOutline } from "react-icons/io5";

export default {
  overview: {
    title: (
      <HStack gap={"2"}>
        <Icon>
          <IoBookOutline />
        </Icon>
        Overview
      </HStack>
    ),
  },
};
