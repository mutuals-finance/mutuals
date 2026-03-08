import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
import { baseOptions } from "@/lib/layout.shared";
import { createMetadata, createViewport } from "@mutuals/metadata-nextjs";
import { Metadata, Viewport } from "next";
import fonts from "@mutuals/ui/font";

export const metadata: Metadata = createMetadata({ title: "Mutuals Docs" });
export const viewport: Viewport = createViewport();

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={Object.values(fonts)
        .map((f) => f.variable)
        .join(" ")}
      suppressHydrationWarning={true}
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
