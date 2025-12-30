import { getPageMap } from "nextra/page-map";
import { Metadata, Viewport } from "next";
import { PropsWithChildren } from "react";
import { createMetadata, createViewport } from "@mutuals/metadata-nextjs";
import fonts from "@mutuals/ui/font";
import { MutualsTheme } from "@/theme";

export const metadata: Metadata = createMetadata({
  title: "Mutuals Documentation",
});

export const viewport: Viewport = createViewport();

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning={true}
      className={Object.values(fonts)
        .map((f) => f.variable)
        .join(" ")}
    >
      <body>
        <MutualsTheme pageMap={await getPageMap()}>{children}</MutualsTheme>
      </body>
    </html>
  );
}
