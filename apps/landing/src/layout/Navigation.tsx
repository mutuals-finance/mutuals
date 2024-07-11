import {
  Button,
  Hide,
  HStack,
  IconButton,
  Show,
  SplitFiLogo,
  StackProps,
  Box,
} from "@splitfi/ui";
import { IoMenuSharp } from "react-icons/io5";

import NavLink from "@/layout/NavLink";
import Link from "next/link";

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
    <HStack flex="1" spacing="12" position="relative" {...props}>
      <Link href={"/"}>
        <SplitFiLogo color="color.1" w={{ base: "36", lg: "36" }} />
      </Link>
      <Show above="lg">
        <HStack ml={"auto"} spacing="12" justify="center">
          {links.map(({ href, id, label, ...props }) => {
            return (
              <NavLink href={href} key={id} {...props}>
                {label}
              </NavLink>
            );
          })}
        </HStack>

        <Box>
          <Button rounded={"full"} variant="blackWhite">
            Launch App
          </Button>
        </Box>
      </Show>

      <Hide above="lg">
        <Box ml={"auto"}>
          <IconButton
            fontSize="3xl"
            size={"md"}
            icon={<IoMenuSharp />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Box>
      </Hide>
    </HStack>
  );
}
