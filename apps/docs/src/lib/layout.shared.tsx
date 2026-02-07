import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import {
  BookIcon,
  CableIcon,
  CodeXmlIcon,
  HomeIcon,
  LifeBuoyIcon,
  PiIcon,
  ReceiptTextIcon,
} from "lucide-react";
import { MutualsLogo } from "@/components/mutuals-logo";

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: "https://github.com/mutuals-finane",
    nav: {
      title: (
        <div className={"flex flex-row items-center gap-1"}>
          <div className={"w-24"}>
            <MutualsLogo />
          </div>
          <span
            className={
              "font-medium mb-1 text-fd-muted-foreground font-heading text-[0.6rem]"
            }
          >
            docs
          </span>
        </div>
      ),
    },
    links: [
      {
        icon: <PiIcon />,
        text: "Concepts",
        url: "/concepts/overview",
        active: "nested-url",
        secondary: false,
      },
      {
        icon: <ReceiptTextIcon />,
        text: "Smart Contracts",
        url: "/smart-contracts/overview",
        active: "nested-url",
        secondary: false,
      },
      {
        icon: <CodeXmlIcon />,
        text: "SDK Reference",
        url: "/sdk-reference/overview",
        active: "nested-url",
        secondary: false,
      },
      {
        icon: <CableIcon />,
        text: "API Reference",
        url: "/api-reference/overview",
        active: "nested-url",
        secondary: false,
      },
      {
        icon: <LifeBuoyIcon />,
        text: "Support",
        url: "/support/overview",
        active: "nested-url",
        secondary: false,
      },
      {
        icon: <HomeIcon />,
        text: "Homepage",
        url: "https://mutuals.finance",
        secondary: true,
      },
    ],
  };
}
