import { Button, Card, IconProps } from "@mutuals/ui";
import { IoChatbubblesOutline, IoPaperPlaneOutline } from "react-icons/io5";

const items = [
  {
    icon: <IoChatbubblesOutline />,
    heading: "Contact Us",
    description: [
      "Discuss your enterprise requirements, explore personalized pricing options, or request a demo.",
    ],
    children: (
      <Button variant={"solid"} mt={"4"} alignSelf={"flex-start"} size={"sm"}>
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
