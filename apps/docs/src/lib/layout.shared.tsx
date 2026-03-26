import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import {
  BookIcon,
  CableIcon,
  CodeXmlIcon,
  HomeIcon,
  LifeBuoyIcon,
  ReceiptTextIcon,
} from "lucide-react";
import { MutualsLogo } from "@/components/mutuals-logo";

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: "https://github.com/mutuals-finance",
    nav: {
      title: (
        <div className={"flex flex-row items-center gap-1"}>
          <div className={"w-24"}>
            <MutualsLogo />
          </div>
          <span
            className={
              "mb-1 font-heading font-medium text-[0.6rem] text-fd-muted-foreground"
            }
          >
            docs
          </span>
        </div>
      ),
    },
    links: [
      {
        icon: <BookIcon />,
        text: "Concepts",
        url: "/concepts/introduction",
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
