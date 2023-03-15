import React from "react";
import Link from "next/link";

export default function AppSidebarMeta() {
  return (
    <div
      className={
        "flex-shrink-0 flex flex-col text-xs text-center px-4 py-2 lg:px-8 lg:py-4 text-neutral-600/50"
      }
    >
      <p>Copyright © {new Date().getFullYear()}, SplitFi</p>
      <p>
        Website by <Link href={"https://decentum.co"}>Decentum</Link>
      </p>
    </div>
  );
}
