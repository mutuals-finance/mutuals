import Actors from "src/features/Home/Actors";
import Features from "src/features/Home/Features";
import Hero from "src/features/Home/Hero";
import Payments from "src/features/Home/Payments";
import Value from "src/features/Home/Value";
import Chains from "src/features/Home/Chains";
import { Theme } from "@mutuals/ui";
import HeaderObserverChange from "@/providers/HeaderObserver/Change";

export default function HomePage() {
  return (
    <>
      <Theme appearance="dark">
        <HeaderObserverChange theme={"dark"}>
          <Hero />
          <Value />
        </HeaderObserverChange>
      </Theme>

      <Actors />
      <Payments />
      <Chains />
      <Features />
    </>
  );
}
