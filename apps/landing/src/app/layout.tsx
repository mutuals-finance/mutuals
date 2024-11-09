import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import Providers from "@/providers";
import Layout from "@/layout";
import fonts from "@mutuals/ui/font";

type RootLayoutProps = PropsWithChildren;

export const metadata: Metadata = {
  title: {
    default: `Mutuals – The best way to manage on-chain payments`,
    template: "%s – Mutuals",
  },
  description: "The best way to manage on-chain payments",
  applicationName: "Mutuals",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      className={Object.values(fonts)
        .map((f) => f.variable)
        .join(" ")}
      suppressHydrationWarning={true}
    >
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
