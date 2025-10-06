import FAQ from "@/features/Pricing/FAQ";
import Options from "@/features/Pricing/Options";
import ShellPageHeader from "@/features/Shell/PageHeader";

export default function PricingPage() {
  return (
    <>
      {/* <Theme appearance={"dark"}>
        <Box position={"relative"} bg={"bg"}>
          <AspectRatio
            ratio={21 / 9}
            position={"absolute"}
            bottom={"0"}
            left={"0"}
            w={"full"}
            h={"full"}
          >
            <video
              loop={true}
              autoPlay={true}
              muted={true}
              style={{ objectPosition: "top" }}
            >
              <source src="/pricing.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </AspectRatio>

        </Box>
      </Theme>*/}
      <ShellPageHeader tag={"Pricing"}>
        Mutuals is free - That&apos;s it.
      </ShellPageHeader>

      <Options />

      <FAQ />
    </>
  );
}
