import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Metadata, Viewport } from "next";
import { PropsWithChildren } from "react";
import { createMetadata, createViewport } from "@mutuals/metadata-nextjs";
import fonts from "@mutuals/ui/font";
import { UIProvider } from "@mutuals/ui";
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
      <Head></Head>
      <body>
        <UIProvider>
          <MutualsTheme pageMap={await getPageMap()}>{children}</MutualsTheme>
        </UIProvider>
      </body>
    </html>
  );
}
