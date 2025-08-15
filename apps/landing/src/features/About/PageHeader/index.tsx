import { Wrap, Button, Link } from "@mutuals/ui";
import ShellPageHeader from "@/features/Shell/PageHeader";
import PageHeaderImageSlider from "@/features/About/PageHeader/ImageSlider";

export default function AboutPageHeader() {
  return (
    <>
      <ShellPageHeader
        tag={"About"}
        afterContent={
          <Wrap
            direction={"row"}
            mt={{ base: "12", lg: "12" }}
            gap={{ base: "2", lg: "2" }}
          >
            <Link asChild href={"/about"}>
              <Button size={"xl"} variant={"solid"}>
                Open Roles
              </Button>
            </Link>

            <Link asChild href={"/contact"}>
              <Button size={"xl"} variant={"surface"}>
                Reach Out
              </Button>
            </Link>
          </Wrap>
        }
      >
        Hello, there! We’re Mutuals
      </ShellPageHeader>

      <PageHeaderImageSlider mb={"16"} />
    </>
  );
}
