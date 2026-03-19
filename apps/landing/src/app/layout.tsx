import { createMetadata, createViewport } from "@mutuals/metadata-nextjs";
import fonts from "@mutuals/ui/font";
import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";
import Layout from "@/features/layout";
import Providers from "@/providers";

export const metadata: Metadata = createMetadata();
export const viewport: Viewport = createViewport();

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      className={Object.values(fonts)
        .map((f) => f.variable)
        .join(" ")}
      lang="en"
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
