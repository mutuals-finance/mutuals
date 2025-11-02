"use client";

import { useSearchParams } from "next/navigation";
import { useAuthCallback } from "@openfort/react";
import { useEffect } from "react";
/*
export const metadata: Metadata = {
  title: "Dashboard",
};*/

export default function DashboardHomePage() {
  const searchParams = useSearchParams();
  const { isLoading } = useAuthCallback({
    onSuccess: () => {
      alert("Authentication verified!");
    },
    onError: (e) => {
      alert("Authentication verification failed!" + e.message);
    },
  });
  useEffect(() => {
    console.log("searchParams isLoading", { searchParams, isLoading });
  }, [searchParams, isLoading]);

  return <></>;
}
