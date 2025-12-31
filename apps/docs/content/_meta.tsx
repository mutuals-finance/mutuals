import { HStack, Icon } from "@mutuals/ui";
import {
  IoBookOutline,
  IoCodeWorkingOutline,
  IoDocumentTextOutline,
  IoExtensionPuzzleOutline,
  IoHelpBuoyOutline,
} from "react-icons/io5";

export default {
  index: {
    title: "Documentation Home",
    type: "page",
    display: "hidden",
    theme: {
      typesetting: "article",
      sidebar: false,
      toc: false,
      pagination: false,
      copyPage: false,
    },
  },
  concepts: {
    title: (
      <HStack gap={"2"}>
        <Icon>
          <IoBookOutline />
        </Icon>
        Concepts
      </HStack>
    ),
    type: "page",
  },
  contracts: {
    title: (
      <HStack gap={"2"}>
        <Icon>
          <IoDocumentTextOutline />
        </Icon>
        Contracts
      </HStack>
    ),
    type: "page",
  },
  sdks: {
    title: (
      <HStack gap={"2"}>
        <Icon>
          <IoCodeWorkingOutline />
        </Icon>
        SDKs
      </HStack>
    ),
    type: "page",
  },
  apis: {
    title: (
      <HStack gap={"2"}>
        <Icon>
          <IoExtensionPuzzleOutline />
        </Icon>
        APIs
      </HStack>
    ),
    type: "page",
  },
  support: {
    title: (
      <HStack gap={"2"}>
        <Icon>
          <IoHelpBuoyOutline />
        </Icon>
        Support
      </HStack>
    ),
    type: "page",
  },
};
