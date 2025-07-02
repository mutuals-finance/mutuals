import { Container, AspectRatio, Wrap, Button, Link } from "@mutuals/ui";
import ShellPageHeader from "@/features/Shell/PageHeader";
import NextImage from "next/image";
import aboutImage from "@/assets/about.jpg";

export default function AboutPageHeader() {
  return (
    <>
      <ShellPageHeader tag={"About"}>
        Hello, there! We’re Mutuals
      </ShellPageHeader>
      <Container centerContent={true} maxW={"7xl"} mb={"16"}>
        <AspectRatio
          ratio={16 / 9}
          position={"relative"}
          rounded={"lg"}
          overflow={"hidden"}
          w={"full"}
          maxW={"3xl"}
        >
          <NextImage
            src={aboutImage}
            alt={"Page header grid background"}
            style={{
              objectFit: "cover",
            }}
            fill={true}
          />
        </AspectRatio>

        <Wrap
          direction={{ base: "column", lg: "row" }}
          mt={{ base: "12", lg: "16" }}
          gap={{ base: "6", lg: "6" }}
        >
          <Link asChild href={"/contact"}>
            <Button size={"2xl"} variant={"surface"}>
              Reach Out
            </Button>
          </Link>
        </Wrap>
      </Container>
    </>
  );
}
