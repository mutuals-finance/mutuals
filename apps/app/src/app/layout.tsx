import React, { PropsWithChildren } from "react";

import "keen-slider/keen-slider.min.css";

import Providers from "@/providers";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
