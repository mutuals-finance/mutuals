import React from "react";
import {
  HomeHero,
  HomeCta,
  HomeFeatures,
  HomeAnalytics,
} from "@/templates/home";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeCta />
      <HomeFeatures />
      <HomeAnalytics />
    </>
  );
}
