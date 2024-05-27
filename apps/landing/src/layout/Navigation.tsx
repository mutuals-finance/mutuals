import {
  Button,
  ButtonGroup,
  Hide,
  HStack,
  IconButton,
  Show,
  SplitFiLogo,
  StackDivider,
  StackProps,
} from "@splitfi/ui";
import { IoMenuSharp } from "react-icons/io5";

import NavLink from "@/layout/NavLink";

const links = {
  left: [
    {
      id: "pricing",
      href: "/pricing",
      label: "Pricing",
    },
    { id: "contact", label: "Contact", href: "/contact" },
  ],
  right: [{ id: "support", label: "Support", href: "/support" }],
};

export default function Navigation(props: StackProps) {
  return (
    <HStack flex="1" spacing="24" position="relative" {...props}>
      <SplitFiLogo w={{ base: "24", lg: "20" }} />

      <Show above="lg">
        <HStack spacing="12" justify="center">
          {links.left.map(({ href, id, label, ...props }) => {
            return (
              <NavLink href={href} key={id} {...props}>
                {label}
              </NavLink>
            );
          })}
        </HStack>

        <HStack spacing="6" justify="center" ml={"auto"}>
          {links.right.map(({ href, id, label, ...props }) => {
            return (
              <NavLink href={href} key={id} {...props}>
                {label}
              </NavLink>
            );
          })}
          <StackDivider />
          <NavLink href="/docs">Docs</NavLink>
          <Button variant="blackWhite">Launch App</Button>
        </HStack>
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
  );
}
