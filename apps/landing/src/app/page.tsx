import Actors from "src/features/Home/Actors";
import Features from "src/features/Home/Features";
import Hero from "src/features/Home/Hero";
import Payments from "src/features/Home/Payments";
import Value from "src/features/Home/Value";
import Chains from "src/features/Home/Chains";
import ThemeWrapper from "@/components/ThemeWrapper";
import GridBg from "@/components/GridBg";

export default function HomePage() {
  return (
    <>
      <ThemeWrapper>
        <GridBg />
        <Hero />
        <Value />
      </ThemeWrapper>

      <Actors />
      <Payments />
      <Chains />
      <Features />
    </>
  );
}
