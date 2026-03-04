"use client";

import { type KeenSliderProps } from "@/components/KeenSlider/KeenSlider";
import { AspectRatio, Box, Icon, Link, Marquee, Stack } from "@mutuals/ui";
import NextImage, { type ImageProps } from "next/image";
import IconBox from "@/components/IconBox";
import { IoArrowUp } from "react-icons/io5";

const animation = { duration: 4 * 10000, easing: (t: number) => t };

interface ValueCardProps extends KeenSliderProps {
  networks: Array<{
    name: string;
    href: string;
    base: ImageProps["src"];
    dark: ImageProps["src"];
  }>;
}

export default function ChainSlider({
  options,
  networks,
  ...props
}: ValueCardProps) {
  return (
    <Marquee.Root pauseOnInteraction speed={25}>
      <Marquee.Viewport>
        <Marquee.Content>
          {networks.map((network) => (
            <Marquee.Item
              key={network.name}
              position={"relative"}
              bg={"bg.muted"}
              _hover={{ bg: "bg.emphasized" }}
              transition={"background-color 0.2s ease-in-out"}
              rounded={"2xl"}
              p={"6"}
              asChild={true}
            >
              <Link href={network.href} external={true} arrow={false}>
                <Box p="1" position={"absolute"} top={"0"} right={"0"}>
                  <IconBox size={"xs"} bg={"transparent"} color={"fg.subtle"}>
                    <Icon asChild={true} transform={"rotate(45deg)"}>
                      <IoArrowUp />
                    </Icon>
                  </IconBox>
                </Box>

                <AspectRatio ratio={1} w={"24"}>
                  <Stack>
                    <Box display={{ _dark: "none" }}>
                      <NextImage
                        src={network.base}
                        alt={network.name}
                        fill={true}
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                    <Box display={{ base: "none", _dark: "block" }}>
                      <NextImage
                        src={network.dark}
                        alt={`${network.name} dark mode`}
                        fill={true}
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                  </Stack>
                </AspectRatio>
              </Link>
            </Marquee.Item>
          ))}
        </Marquee.Content>
      </Marquee.Viewport>
    </Marquee.Root>
  );
}
