import FAQ from "@/features/Pricing/FAQ";
import Options from "@/features/Pricing/Options";
import ShellPageHeader from "src/features/Shell/PageHeader";

export default function PricingPage() {
  return (
    <>
      <ShellPageHeader tag={"Pricing"}>
        Mutuals is free - That&apos;s it.
      </ShellPageHeader>
      <Options />
      <FAQ />
    </>
  );
}
