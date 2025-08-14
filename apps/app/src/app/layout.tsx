import React, { PropsWithChildren } from "react";

import Providers from "@/providers";
import fonts from "@mutuals/ui/font";
import { createMetadata } from "@mutuals/metadata-nextjs";

export const metadata = createMetadata();

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      className={Object.values(fonts)
        .map((f) => f.variable)
        .join(" ")}
      suppressHydrationWarning={true}
    >
      <body suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
