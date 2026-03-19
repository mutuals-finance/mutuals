import { Box, Icon, Link, type LinkProps, Stack } from "@mutuals/ui";
import NextImage from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import IconBox from "@/components/icon-box";
import type { Network } from "@/features/home/networks/types";

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
      _hover={{ bg: "bg.emphasized" }}
      arrow={false}
      bg={"bg.muted"}
      external={true}
      h={"32"}
      href={href}
      p={"4"}
      position={"relative"}
      rounded={"l3"}
      transition={"background-color 0.2s ease-in-out"}
      w={"32"}
      {...props}
    >
      <Box p="1" position={"absolute"} right={"0"} top={"0"}>
        <IconBox bg={"transparent"} color={"fg.subtle"} size={"xs"}>
          <Icon asChild={true}>
            <LuArrowUpRight />
          </Icon>
        </IconBox>
      </Box>

      <Stack
        alignSelf={"stretch"}
        display={{ _dark: "none" }}
        p={"0"}
        position={"relative"}
        w={"full"}
      >
        <NextImage
          alt={name}
          fill={true}
          src={base}
          style={{ objectFit: "contain" }}
        />
      </Stack>
      <Stack
        alignSelf={"stretch"}
        display={{ base: "none", _dark: "flex" }}
        p={"0"}
        position={"relative"}
        w={"full"}
      >
        <NextImage
          alt={`${name} dark mode`}
          fill={true}
          src={dark}
          style={{ objectFit: "contain" }}
        />
      </Stack>
    </Link>
  );
}
