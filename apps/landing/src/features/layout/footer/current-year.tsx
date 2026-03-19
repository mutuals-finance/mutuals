"use client";

import { Skeleton } from "@mutuals/ui";
import { Suspense } from "react";

function Year() {
  return <>{new Date().getFullYear()}</>;
}

export function CurrentYear() {
  return (
    <Suspense fallback={<Skeleton display="inline-block" h="1em" w="6" />}>
      <Year />
    </Suspense>
  );
}
