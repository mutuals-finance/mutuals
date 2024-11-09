import FAQ from "@/features/Pricing/FAQ";
import Options from "@/features/Pricing/Options";
import PageHeader from "@/components/PageHeader";

export default function PricingPage() {
  return (
    <>
      <PageHeader tag={"Pricing"}>Mutuals is free - That&apos;s it.</PageHeader>
      <Options />
      <FAQ />
    </>
  );
}
