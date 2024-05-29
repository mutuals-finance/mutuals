import Actors from "@/app/Actors";
import Features from "@/app/Features";
import Hero from "@/app/Hero";
import Payments from "@/app/Payments";
import Value from "@/app/Value";
import Chains from "@/app/Chains";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Actors />
      <Chains />
      <Value />
      <Payments />
      <Features />
    </>
  );
}
