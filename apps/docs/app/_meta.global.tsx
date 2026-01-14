import { HStack, Icon } from "@mutuals/ui";
import {
  IoBookOutline,
  IoCodeWorkingOutline,
  IoDocumentTextOutline,
  IoExtensionPuzzleOutline,
  IoFootstepsOutline,
  IoHardwareChipOutline,
  IoHelpBuoyOutline,
  IoHelpCircleOutline,
  IoLogoReact,
} from "react-icons/io5";
import { LuScale, LuUnplug } from "react-icons/lu";

const meta = {
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
    title: "Concepts",
    type: "page",
    items: {
      overview: {
        title: (
          <HStack gap={"2"}>
            <Icon>
              <IoBookOutline />
            </Icon>
            Overview
          </HStack>
        ),
        type: "page",
        items: {
          "getting-started": {
            items: {
              index: "Introduction",
              example: "A simple example",
            },
          },
          "liquidity-model": {},
          terminology: {
            items: {
              index: "Overview",
            },
          },
        },
      },
      extensions: {
        title: (
          <HStack gap={"2"}>
            <Icon>
              <LuUnplug />
            </Icon>
            Extensions
          </HStack>
        ),
        type: "page",
        items: {
          index: "Overview",
        },
      },
      comparison: {
        title: (
          <HStack gap={"2"}>
            <Icon>
              <LuScale />
            </Icon>
            Comparison
          </HStack>
        ),
        type: "page",
        items: {
          index: "Overview",
          web2: {
            items: {
              index: "Overview",
            },
          },
          web3: {
            items: {
              index: "Overview",
            },
          },
        },
      },
    },
  },
  contracts: {
    title: "Contracts",
    type: "page",
    items: {
      overview: {
        title: (
          <HStack gap={"2"}>
            <Icon>
              <IoDocumentTextOutline />
            </Icon>
            Overview
          </HStack>
        ),
        type: "page",
        items: {
          index: "Introduction",
        },
      },
      guides: {
        title: (
          <HStack gap={"2"}>
            <Icon>
              <IoFootstepsOutline />
            </Icon>
            Guides
          </HStack>
        ),
        type: "page",
        items: {
          index: "Overview",
        },
      },
    },
  },
  sdks: {
    title: "SDKs",
    type: "page",
    items: {
      overview: {
        title: (
          <HStack gap={"2"}>
            <Icon>
              <IoCodeWorkingOutline />
            </Icon>
            Overview
          </HStack>
        ),
        type: "page",
        items: {
          "getting-started": {
            items: {
              index: "Introduction",
            },
          },
        },
      },
      core: {
        title: (
          <HStack gap={"2"}>
            <Icon>
              <IoHardwareChipOutline />
            </Icon>
            Core SDK
          </HStack>
        ),
        type: "page",
        items: {
          index: "Introduction",
        },
      },
      react: {
        title: (
          <HStack gap={"2"}>
            <Icon>
              <IoLogoReact />
            </Icon>
            React SDK
          </HStack>
        ),
        type: "page",
        items: {
          index: "Introduction",
        },
      },
    },
  },
  apis: {
    title: "API Reference",
    type: "page",
    items: {
      overview: {
        title: (
          <HStack gap={"2"}>
            <Icon>
              <IoExtensionPuzzleOutline />
            </Icon>
            Overview
          </HStack>
        ),
        type: "page",
        items: {
          "getting-started": {
            items: {
              index: "Introduction",
              quickstart: "Quickstart",
            },
          },
        },
      },
    },
  },
  support: {
    title: "Support",
    type: "page",
    items: {
      overview: {
        title: (
          <HStack gap={"2"}>
            <Icon>
              <IoHelpBuoyOutline />
            </Icon>
            Overview
          </HStack>
        ),
        type: "page",
        items: {
          index: "Introduction",
        },
      },
      guides: {
        title: (
          <HStack gap={"2"}>
            <Icon>
              <IoFootstepsOutline />
            </Icon>
            Guides
          </HStack>
        ),
        type: "page",
        items: {
          index: "Overview",
        },
      },
      faq: {
        title: (
          <HStack gap={"2"}>
            <Icon>
              <IoHelpCircleOutline />
            </Icon>
            FAQ
          </HStack>
        ),
        type: "page",
        items: {
          index: "Overview",
        },
      },
    },
  },
};

export default meta;
