import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import Providers from "@/providers";
import Layout from "@/layout";
import fonts from "@mutuals/ui/font";

type RootLayoutProps = PropsWithChildren;

const APP_NAME = "Mutuals";

export const metadata: Metadata = {
  title: {
    default: `${APP_NAME} – The best way to manage on-chain payments`,
    template: "%s – Mutuals",
  },
  description: "The best way to manage on-chain payments",
  applicationName: APP_NAME,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${fonts.Inter.variable} ${fonts.GeneralSans.variable}`}
    >
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
