"use client";

import NextImage from "next/image";
import {
  AspectRatio,
  Box,
  Stack,
  StackProps,
  Tabs,
  useTabs,
  MenuRoot,
  MenuTrigger,
  Button,
  Portal,
  MenuPositioner,
  MenuContent,
  MenuItem,
  Theme,
} from "@mutuals/ui";
import bg2Image from "@/assets/pay-2-bg.png";
import paymentItems from "@/features/Home/Hero/paymentItems";
import { IoChevronDown } from "react-icons/io5";

export type HomeHeroPaymentTabsProps = StackProps;

function HomeHeroPaymentTabsList({ children, ...props }: StackProps) {
  return (
    <Stack
      bg={"bg"}
      rounded={"2xl"}
      maxW={"4xl"}
      direction={"row"}
      p={"1"}
      {...props}
    >
      {children}
    </Stack>
  );
}

export default function HomeHeroPaymentTabs(props: HomeHeroPaymentTabsProps) {
  const tabs = useTabs({
    defaultValue: paymentItems[0]?.id,
  });

  const selectedItem = paymentItems.find((item) => item.id === tabs.value);

  return (
    <Theme appearance={"light"} bg={"transparent"}>
      <Stack
        position={"relative"}
        roundedBottom={{ lg: "4xl" }}
        roundedTop={"4xl"}
        overflow={"hidden"}
        px={{ base: "6", md: "12" }}
        py={"12"}
        w={"full"}
        bg={"bg"}
        {...props}
      >
        <NextImage
          src={bg2Image}
          alt={"Combined allocation"}
          fill={true}
          style={{ objectFit: "cover" }}
        />

        <HomeHeroPaymentTabsList hideFrom={"lg"} position={"relative"}>
          <MenuRoot onSelect={({ value }) => tabs.setValue(value)}>
            <MenuTrigger asChild>
              <Button variant="ghost" w="full">
                {selectedItem?.tag} <IoChevronDown />
              </Button>
            </MenuTrigger>
            <Portal>
              <MenuPositioner>
                <MenuContent>
                  {paymentItems.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.tag}
                    </MenuItem>
                  ))}
                </MenuContent>
              </MenuPositioner>
            </Portal>
          </MenuRoot>
        </HomeHeroPaymentTabsList>

        <Tabs.RootProvider variant="enclosed" fitted={true} value={tabs}>
          <Tabs.List
            hideBelow={"lg"}
            _before={{ display: "none" }}
            asChild={true}
          >
            <HomeHeroPaymentTabsList mx={"auto"} gap={"0"}>
              {paymentItems.map((item, index) => (
                <Tabs.Trigger key={index} value={item.id} h={"12"}>
                  {item.tag}
                </Tabs.Trigger>
              ))}
            </HomeHeroPaymentTabsList>
          </Tabs.List>

          <Stack alignItems="center" pt={{ lg: "6" }}>
            <AspectRatio
              position={"relative"}
              w={"full"}
              ratio={{ base: 4 / 3, md: 16 / 9 }}
              rounded={"2xl"}
              maxW={"4xl"}
            >
              <Box>
                {paymentItems.map((item, index) => (
                  <Tabs.Content
                    display={"flex"}
                    alignItems={"stretch"}
                    justifyContent={"stretch"}
                    position={"absolute"}
                    inset={"0"}
                    key={index}
                    value={item.id}
                    _open={{
                      animationName: "fade-in",
                      animationDuration: "600ms",
                    }}
                    _closed={{
                      animationName: "fade-out",
                      animationDuration: "240ms",
                    }}
                  >
                    <Stack p={"4"} bg={"white/25"} rounded={"2xl"} w={"full"}>
                      <Box
                        position={"relative"}
                        flex={"1"}
                        rounded={"2xl"}
                        overflow={"hidden"}
                        bg={"white"}
                      >
                        <NextImage
                          src={item.image}
                          alt={item.tag + " image"}
                          fill={true}
                          style={{
                            objectFit: "contain",
                            objectPosition: "center",
                          }}
                        />
                      </Box>
                    </Stack>
                  </Tabs.Content>
                ))}
              </Box>
            </AspectRatio>
          </Stack>
        </Tabs.RootProvider>
      </Stack>
    </Theme>
  );
}
