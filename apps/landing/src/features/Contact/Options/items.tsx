import { Button, Card, IconProps, Link } from "@mutuals/ui";
import { IoChatbubblesOutline, IoPaperPlaneOutline } from "react-icons/io5";

const items = [
  {
    icon: <IoChatbubblesOutline />,
    heading: "Contact Us",
    description: [
      "Discuss your enterprise requirements, explore personalized pricing options, or request a demo.",
    ],
    children: (
      <Link asChild={true} href={"mailto:hello@mutuals.finance"}>
        <Button
          variant={"subtle"}
          rounded="full"
          mt={"6"}
          alignSelf={"flex-start"}
        >
          Let's Chat
        </Button>
      </Link>
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
