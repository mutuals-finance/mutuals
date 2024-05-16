"use client";

import { PropsWithChildren } from "react";
import { UIProvider } from "@splitfi/ui";

import "keen-slider/keen-slider.min.css";

export default function Providers({ children }: PropsWithChildren) {
  return <UIProvider>{children}</UIProvider>;
}
