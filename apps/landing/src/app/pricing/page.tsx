import FAQ from "@/app/pricing/FAQ";
import Info from "@/app/pricing/Info";
import PageHeader from "@/components/PageHeader";

export default function PricingPage() {
  return (
    <>
      <PageHeader tag={"Pricing"}>Mutuals is free - That&apos;s it.</PageHeader>
      <Info />
      <FAQ />
    </>
  );
}
