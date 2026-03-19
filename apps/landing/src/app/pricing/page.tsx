import MotionBoxWrapper from "@/components/motion-box-wrapper";
import FAQ from "@/features/pricing/faq";
import Options from "@/features/pricing/options";
import ShellPageHeader from "@/features/shell/page-header";

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
