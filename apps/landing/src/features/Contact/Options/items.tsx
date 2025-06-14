import {
  AccordionItemProps,
  Button,
  Card,
  IconProps,
  List,
  Text,
} from "@mutuals/ui";
import { IoChatbubblesOutline, IoPaperPlaneOutline } from "react-icons/io5";

const items = [
  {
    icon: <IoChatbubblesOutline />,
    heading: "Contact Us",
    description: [
      "Discuss your enterprise requirements, explore personalized pricing options, or request a demo.",
    ],
    children: (
      <Button mt={"6"} variant={"subtle"}>
        Let's Chat
      </Button>
    ),
  },
  {
    icon: <IoPaperPlaneOutline />,
    heading: "Get in touch",
    description: [
      "Found a bug? File a GitHub issue and our team will review it right away.",
      "Need something else? Send us a note.",
    ],
  },
] as Array<
  Card.RootProps & {
    icon?: IconProps["children"];
    heading?: string;
    description?: string[];
  }
>;

export default items;
