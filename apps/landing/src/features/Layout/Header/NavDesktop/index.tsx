import { Button, Stack, type LinkProps, Link } from "@mutuals/ui";

import NavLink from "@/features/Layout/Header/NavLink";
import NavWrapper from "@/features/Layout/Header/NavWrapper";
import HeaderContainerWrapper, {
  HeaderContainerWrapperProps,
} from "@/features/Layout/Header/ContainerWrapper";

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
      <NavWrapper>
        <Stack gap={"8"} mx={"12"} direction={"row"}>
          {links.slice(0, -1).map((props, index) => (
            <NavLink key={index} {...props} />
          ))}
        </Stack>

        <Stack direction={"row"} ml={"auto"} gap={"8"}>
          {lastLinksProps && <NavLink {...lastLinksProps} />}
          <Link
            href={"https://app.mutuals.finance"}
            target="_blank"
            asChild={true}
          >
            <Button size={"md"} colorPalette={"whiteAlpha"} rounded={"full"}>
              Launch app
            </Button>
          </Link>
        </Stack>
      </NavWrapper>
    </HeaderContainerWrapper>
  );
}
