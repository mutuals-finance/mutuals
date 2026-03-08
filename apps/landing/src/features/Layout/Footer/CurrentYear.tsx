"use client";

import { Suspense } from "react";
import { Skeleton } from "@mutuals/ui";

function Year() {
  return <>{new Date().getFullYear()}</>;
}

export function CurrentYear() {
  return (
    <Suspense fallback={<Skeleton w="6" h="1em" display="inline-block" />}>
      <Year />
    </Suspense>
  );
}
