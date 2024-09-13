import { IoChatbubblesOutline, IoPaperPlaneOutline } from "react-icons/io5";
import { Button } from "@mutuals/ui";
import { ContactCardProps } from "@/app/contact/Card";

const options: ContactCardProps[] = [
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
];

export default options;
