import Actors from "@/features/Home/Actors";
import Features from "@/features/Home/Features";
import Hero from "@/features/Home/Hero";
import Value from "@/features/Home/Value";
import Networks from "@/features/Home/Networks";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Value />
      <Networks />
      <Actors />
      <Features />
    </>
  );
}
