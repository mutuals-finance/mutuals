import { createMetadata, createViewport } from "@mutuals/metadata-nextjs";
import fonts from "@mutuals/ui/font";
import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";
import Providers from "@/providers";

export const metadata: Metadata = createMetadata();
export const viewport: Viewport = createViewport();

type RootLayoutProps = PropsWithChildren;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      className={Object.values(fonts)
        .map((f) => f.variable)
        .join(" ")}
      lang="en"
      suppressHydrationWarning={true}
    >
      <body suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
