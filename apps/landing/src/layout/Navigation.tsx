import {
  Button,
  ButtonGroup,
  Hide,
  HStack,
  LightMode,
  IconButton,
  Show,
  SplitFiLogo,
  StackProps,
  AbsoluteCenter,
} from "@splitfi/ui";
import { IoMenuSharp } from "react-icons/io5";

import NavLink from "@/layout/NavLink";
import Box from "@/components/Animation/Box";

const links = [
  {
    id: "pricing",
    href: "/pricing",
    label: "Pricing",
  },
  { id: "contact", label: "Contact", href: "/contact" },
  { id: "support", label: "Support", href: "/support" },
  { id: "docs", label: "Docs", href: "/docs" },
];

export default function Navigation(props: StackProps) {
  return (
    <LightMode>
      <HStack flex="1" spacing="24" position="relative" {...props}>
        <SplitFiLogo color="color.1" w={{ base: "24", lg: "20" }} />

        <Show above="lg">
          <AbsoluteCenter>
            <HStack
              spacing="12"
              justify="center"
              py="3"
              px={{ base: "6", lg: "6" }}
              border={"1px solid"}
              borderColor={"blackAlpha.100"}
              rounded={"lg"}
              bg="whiteAlpha.300"
              backdropFilter="auto"
              backdropBlur="12px"
            >
              {links.map(({ href, id, label, ...props }) => {
                return (
                  <NavLink href={href} key={id} {...props}>
                    {label}
                  </NavLink>
                );
              })}
            </HStack>
          </AbsoluteCenter>

          <Box ml={"auto"}>
            <Button variant="blackWhite">Launch App</Button>
          </Box>
        </Show>

        <Hide above="lg">
          <ButtonGroup spacing="3" alignItems="center" ml={"auto"}>
            <Button variant="blackWhite">Launch App</Button>

            <IconButton
              fontSize="3xl"
              icon={<IoMenuSharp />}
              variant="ghost"
              aria-label="Toggle Navigation"
            />
          </ButtonGroup>
        </Hide>
      </HStack>
    </LightMode>
  );
}
