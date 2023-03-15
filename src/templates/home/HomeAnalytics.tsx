import { ButtonPrimary } from "@/components/Button";

export function HomeAnalytics() {
  return (
    <section>
      <div className={"container grid grid-cols-2 gap-6 lg:gap-12"}>
        <div></div>

        <div className={"flex flex-col items-start space-y-6"}>
          <h2 className={"text-5xl font-semibold"}>
            Easily track your payments & shares
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren,
          </p>
          <ButtonPrimary rounded={"base"} size={"lg"}>
            Get Started
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );
}
