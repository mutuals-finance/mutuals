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

interface NavDesktopProps extends HeaderContainerWrapperProps {
  links?: LinkProps[];
}

function NavDesktopStack({ children, ...props }: StackProps) {
  return (
    <Stack
      direction={"row"}
      rounded={"2xl"}
      bgColor={"bg/25"}
      css={{
        backdropFilter: "blur(12px)",
      }}
      shadow={"xs"}
      h="14"
      justifyContent="center"
      alignItems={"center"}
      {...props}
    >
      {children}
    </Stack>
  );
}
export default function NavDesktop({ links = [], ...props }: NavDesktopProps) {
  const lastIndex = links?.length - 1;
  const lastLinksProps = links[lastIndex];

  return (
    <HeaderContainerWrapper {...props}>
      <NavWrapper>
        <AbsoluteCenter>
          <NavDesktopStack
            px={{ base: "6", lg: "12" }}
            textAlign={"center"}
            gap="12"
          >
            {links.slice(0, -1).map((props, index) => (
              <NavLink key={index} {...props} />
            ))}
          </NavDesktopStack>
        </AbsoluteCenter>

        <NavDesktopStack
          px={{ base: "2", lg: "2" }}
          gap={{ base: "2", lg: "2" }}
          separator={<StackSeparator h={"4"} alignSelf={"center"} />}
        >
          {lastLinksProps && (
            <Link href={lastLinksProps.href} target="_blank" asChild={true}>
              <Button size={"md"} variant={"subtle"}>
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
        </NavDesktopStack>
      </NavWrapper>
    </HeaderContainerWrapper>
  );
}
