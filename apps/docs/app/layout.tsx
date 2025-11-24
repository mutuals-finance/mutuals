import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import { Metadata, Viewport } from "next";
import { PropsWithChildren } from "react";
import { createMetadata, createViewport } from "@mutuals/metadata-nextjs";
import fonts from "@mutuals/ui/font";
import "./globals.css";

export const metadata: Metadata = createMetadata({
  title: "Mutuals Documentation",
});
export const viewport: Viewport = createViewport();

const navbar = (
  <Navbar
    logo={<b>Mutuals Docs</b>}
    // ... Your additional navbar options
  />
);
const footer = <Footer>{new Date().getFullYear()} © Mutuals.</Footer>;

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
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/mutuals-finance/mutuals/tree/main/apps/docs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
