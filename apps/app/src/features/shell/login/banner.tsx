import {
  AbsoluteCenter,
  Box,
  MutualsLogo,
  Stack,
  type StackProps,
  Theme,
} from "@mutuals/ui";
import Image from "next/image";
import signInImage from "@/assets/images/sign-in.png";

export default function ShellLoginBanner(props: StackProps) {
  return (
    <Stack gap={"0"} {...props}>
      <Theme appearance="light">
        <AbsoluteCenter zIndex={"50"}>
          <Box
            bg={"bg"}
            h={{ base: "20", lg: "24" }}
            p={{ base: "4", lg: "6" }}
            rounded={{ base: "3xl", lg: "4xl" }}
            shadow={"xs"}
            w={{ base: "20", lg: "24" }}
          >
            <MutualsLogo wordmark={false} />
          </Box>
        </AbsoluteCenter>
      </Theme>

      <Box
        inset={{ base: "0", lg: "3" }}
        overflow={"hidden"}
        position={"absolute"}
        rounded={{ lg: "4xl" }}
      >
        <Image
          alt={"Welcome to Mutuals"}
          fill={true}
          src={signInImage}
          style={{ objectFit: "cover" }}
        />
        <Box
          bgGradient="to-tl"
          gradientFrom="transparent"
          gradientTo="blue.400"
          gradientVia="blue.100"
          inset={"0"}
          position={"absolute"}
        />
      </Box>
    </Stack>
  );
}
