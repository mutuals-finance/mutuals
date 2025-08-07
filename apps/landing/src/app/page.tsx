import Actors from "@/features/Home/Actors";
import Features from "@/features/Home/Features";
import Hero from "@/features/Home/Hero";
import Payments from "@/features/Home/Payments";
import Value from "@/features/Home/Value";
import Chains from "@/features/Home/Chains";

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
