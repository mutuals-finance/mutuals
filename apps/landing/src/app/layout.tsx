import type { Metadata, Viewport } from "next";
import React, { type PropsWithChildren } from "react";

import Providers from "@/providers";
import Layout from "@/features/Layout";
import fonts from "@mutuals/ui/font";

export const metadata: Metadata = {
  title: {
    default: `Mutuals – The best way to manage on-chain payments`,
    template: "%s – Mutuals",
  },
  description: "The best way to manage on-chain payments",
  applicationName: "Mutuals",
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      className={Object.values(fonts)
        .map((f) => f.variable)
        .join(" ")}
      suppressHydrationWarning={true}
    >
      <body suppressHydrationWarning={true}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
