import Actors from "@/app/Actors";
import Features from "@/app/Features";
import Hero from "@/app/Hero";
import Payments from "@/app/Payments";
import Value from "@/app/Value";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Actors />
      <Value />
      <Payments />
      <Features />
    </>
  );
}
