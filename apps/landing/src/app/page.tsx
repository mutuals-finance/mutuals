import Actors from "@/features/Home/Actors";
import Features from "@/features/Home/Features";
import Hero from "@/features/Home/Hero";
import Value from "@/features/Home/Value";
import Chains from "@/features/Home/Chains";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Value />
      <Chains />
      <Actors />
      <Features />
    </>
  );
}
