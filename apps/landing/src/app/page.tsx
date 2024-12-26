import Actors from "src/features/Home/Actors";
import Features from "src/features/Home/Features";
import Hero from "src/features/Home/Hero";
import Payments from "src/features/Home/Payments";
import Value from "src/features/Home/Value";
import Chains from "src/features/Home/Chains";
import { Box } from "@mutuals/ui";

export default function HomePage() {
  return (
    <>
      <Box className={"dark"} bg={"bg"}>
        <Hero />
        <Value />
      </Box>

      <Actors />
      <Payments />
      <Chains />
      <Features />
    </>
  );
}
