import FAQ from "@/features/Pricing/FAQ";
import Options from "@/features/Pricing/Options";
import ShellPageHeader from "@/features/Shell/PageHeader";
import MotionBoxWrapper from "@/components/MotionBoxWrapper";

export default function PricingPage() {
  return (
    <>
      <MotionBoxWrapper>
        <ShellPageHeader tag={"Pricing"}>
          Mutuals is free - That&apos;s it.
        </ShellPageHeader>

        <Options />
      </MotionBoxWrapper>
      <FAQ />
    </>
  );
}
