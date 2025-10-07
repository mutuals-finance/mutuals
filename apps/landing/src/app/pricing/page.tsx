import FAQ from "@/features/Pricing/FAQ";
import Options from "@/features/Pricing/Options";
import ShellPageHeader from "@/features/Shell/PageHeader";
import PricingActors from "@/features/Pricing/Actors";

export default function PricingPage() {
  return (
    <>
      {/* */}
      <ShellPageHeader tag={"Pricing"}>
        Mutuals is free - That&apos;s it.
      </ShellPageHeader>

      <Options />

      <PricingActors />

      <FAQ />
    </>
  );
}
