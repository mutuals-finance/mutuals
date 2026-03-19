import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { createMetadata, createViewport } from "@mutuals/metadata-nextjs";
import fonts from "@mutuals/ui/font";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = createMetadata({ title: "Mutuals Docs" });
export const viewport: Viewport = createViewport();

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      className={Object.values(fonts)
        .map((f) => f.variable)
        .join(" ")}
      lang="en"
      suppressHydrationWarning={true}
    >
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
