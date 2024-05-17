import { IconType } from "react-icons";

import { TemplatedRouteChild } from "@/hooks/useRouterTemplate";

export type SplitTemplateTab = TemplatedRouteChild;

export enum SplitSettingsSection {
  SPLIT = "Split",
  PERSONAL = "Personal",
}

export type SplitSettingsTemplateTab = TemplatedRouteChild & {
  icon: IconType;
  description: string;
};
