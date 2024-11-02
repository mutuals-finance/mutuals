import Actors from "@/app/_components/Actors";
import Features from "@/app/_components/Features";
import Hero from "@/app/_components/Hero";
import Payments from "@/app/_components/Payments";
import Value from "@/app/_components/Value";
import Chains from "@/app/_components/Chains";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Value />
      <Actors />
      {/*<Partners />*/}
      <Payments />
      <Chains />
      <Features />
    </>
  );
}
