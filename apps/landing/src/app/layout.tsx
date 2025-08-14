import React, { type PropsWithChildren } from "react";
import Providers from "@/providers";
import Layout from "@/features/Layout";
import fonts from "@mutuals/ui/font";
import { createMetadata } from "@mutuals/metadata-nextjs";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata();

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
