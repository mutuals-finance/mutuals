import Actors from "@/features/Home/Actors";
import Features from "@/features/Home/Features";
import Hero from "@/features/Home/Hero";
import Value from "@/features/Home/Value";
import Networks from "@/features/Home/Networks";
import DemoCTA from "@/features/Home/DemoCTA";

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
