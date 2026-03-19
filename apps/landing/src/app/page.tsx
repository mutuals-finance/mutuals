import Actors from "@/features/home/actors";
import DemoCTA from "@/features/home/demo-cta";
import Features from "@/features/home/features";
import Hero from "@/features/home/hero";
import Networks from "@/features/home/networks";
import Value from "@/features/home/value";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Value />
      <DemoCTA />
      <Networks />
      <Actors />
      <Features />
    </>
  );
}
