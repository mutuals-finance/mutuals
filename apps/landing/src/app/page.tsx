import Actors from "src/features/Home/Actors";
import Features from "src/features/Home/Features";
import Hero from "src/features/Home/Hero";
import Payments from "src/features/Home/Payments";
import Value from "src/features/Home/Value";
import Chains from "src/features/Home/Chains";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Value />
      <Actors />
      <Payments />
      <Chains />
      <Features />
    </>
  );
}
