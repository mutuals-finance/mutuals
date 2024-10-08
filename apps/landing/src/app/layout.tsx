import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import Providers from "@/providers";
import Layout from "@/layout";

type RootLayoutProps = PropsWithChildren;

const APP_NAME = "Mutuals";

export const metadata: Metadata = {
  title: {
    default: `${APP_NAME} – The best way to manage on-chain payments`,
    template: "%s – Mutuals",
  },
  description: "The best way to manage on-chain payments",
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    url: "https://nextarter-chakra.sznm.dev",
    title: APP_NAME,
    description: "Next.js + chakra-ui + TypeScript template",
    images: {
      url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
      alt: "nextarter-chakra.sznm.dev og-image",
    },
  },
  twitter: {
    creator: "@mutuals",
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
