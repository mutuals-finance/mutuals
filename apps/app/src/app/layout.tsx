import React, { PropsWithChildren } from "react";

import "keen-slider/keen-slider.min.css";

import Providers from "@/providers";
import { siteDescription, siteName, siteUrl } from "@/config";
import { Metadata } from "next";
import fonts from "@mutuals/ui/font";

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: siteUrl,
  },
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      className={Object.values(fonts)
        .map((f) => f.variable)
        .join(" ")}
      suppressHydrationWarning={true}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
