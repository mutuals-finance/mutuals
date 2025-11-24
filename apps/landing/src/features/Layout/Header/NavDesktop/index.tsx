import {
  Button,
  StackSeparator,
  Stack,
  type LinkProps,
  Link,
  AbsoluteCenter,
  StackProps,
} from "@mutuals/ui";

import NavLink from "@/features/Layout/Header/NavLink";
import NavWrapper from "@/features/Layout/Header/NavWrapper";
import HeaderContainerWrapper, {
  HeaderContainerWrapperProps,
} from "@/features/Layout/Header/ContainerWrapper";
import NavContainer from "@/features/Layout/Header/NavContainer";

interface NavDesktopProps extends HeaderContainerWrapperProps {
  links?: LinkProps[];
}

export default function NavDesktop({ links = [], ...props }: NavDesktopProps) {
  const lastIndex = links?.length - 1;
  const lastLinksProps = links[lastIndex];

  return (
    <HeaderContainerWrapper
      bgColor={"bg/50"}
      css={{
        backdropFilter: "blur(12px)",
      }}
      {...props}
    >
      <NavWrapper gap={"12"}>
        <NavContainer gap={"0"}>
          {links.slice(0, -1).map((props, index) => (
            <NavLink key={index} {...props} />
          ))}
        </NavContainer>

        <Stack ml={"auto"} gap={"4"} direction={"row"}>
          {lastLinksProps && (
            <Link href={lastLinksProps.href} target="_blank" asChild={true}>
              <Button size={"md"} variant={"surface"}>
                {lastLinksProps.children}
              </Button>
            </Link>
          )}
          <Link
            href={"https://app.mutuals.finance"}
            target="_blank"
            asChild={true}
          >
            <Button size={"md"} variant={"solid"}>
              Launch App
            </Button>
          </Link>
        </Stack>
      </NavWrapper>
    </HeaderContainerWrapper>
  );
}
