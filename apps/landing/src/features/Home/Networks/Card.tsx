import { Box, Icon, Link, LinkProps, Stack } from "@mutuals/ui";
import IconBox from "@/components/IconBox";
import NextImage from "next/image";
import { Network } from "@/features/Home/Networks/types";
import { LuArrowUpRight } from "react-icons/lu";

export type HomeNetworksCardProps = Omit<LinkProps, "href" | "base"> & Network;

export default function HomeNetworksCard({
  href,
  base,
  name,
  dark,
  ...props
}: HomeNetworksCardProps) {
  return (
    <Link
      href={href}
      external={true}
      arrow={false}
      w={"32"}
      h={"32"}
      position={"relative"}
      bg={"bg.muted"}
      _hover={{ bg: "bg.emphasized" }}
      transition={"background-color 0.2s ease-in-out"}
      rounded={"l3"}
      p={"4"}
      {...props}
    >
      <Box p="1" position={"absolute"} top={"0"} right={"0"}>
        <IconBox size={"xs"} bg={"transparent"} color={"fg.subtle"}>
          <Icon asChild={true}>
            <LuArrowUpRight />
          </Icon>
        </IconBox>
      </Box>

      <Stack
        position={"relative"}
        alignSelf={"stretch"}
        w={"full"}
        p={"0"}
        display={{ _dark: "none" }}
      >
        <NextImage
          src={base}
          alt={name}
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </Stack>
      <Stack
        position={"relative"}
        alignSelf={"stretch"}
        w={"full"}
        p={"0"}
        display={{ base: "none", _dark: "flex" }}
      >
        <NextImage
          src={dark}
          alt={`${name} dark mode`}
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </Stack>
    </Link>
  );
}
