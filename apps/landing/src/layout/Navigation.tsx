import {
  AbsoluteCenter,
  Button,
  ButtonGroup,
  Hide,
  HStack,
  IconButton,
  Show,
  SplitFiLogo,
} from "@splitfi/ui";
import { IoMenuSharp } from "react-icons/io5";

import links from "@/layout/links";
import NavLink from "@/layout/NavLink";

export default function Navigation() {
  return (
    <HStack flex="1" spacing="12" justify="space-between" position="relative">
      <SplitFiLogo w={{ base: "24", lg: "24" }} />

      <Show above="lg">
        <AbsoluteCenter>
          <HStack spacing="12" justify="center">
            {links.map(({ href, id, label, ...props }) => {
              return (
                <NavLink href={href} key={id} {...props}>
                  {label}
                </NavLink>
              );
            })}
          </HStack>
        </AbsoluteCenter>

        <HStack spacing="6" justify="center">
          <NavLink href="/docs">Docs</NavLink>
          <Button variant="blackWhite">Launch App</Button>
        </HStack>
      </Show>

      <Hide above="lg">
        <ButtonGroup spacing="3" alignItems="center">
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
