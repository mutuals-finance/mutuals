import { Button, Link, type LinkProps, Stack } from "@mutuals/ui";
import HeaderContainerWrapper, {
  type HeaderContainerWrapperProps,
} from "@/features/layout/header/container-wrapper";
import NavLink from "@/features/layout/header/nav-link";
import NavWrapper from "@/features/layout/header/nav-wrapper";

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
        <Stack direction={"row"} gap={"8"} mx={"12"}>
          {links.slice(0, -1).map((props, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static nav links have no stable unique id
            <NavLink key={index} {...props} />
          ))}
        </Stack>

        <Stack direction={"row"} gap={"8"} ml={"auto"}>
          {lastLinksProps && <NavLink {...lastLinksProps} />}
          <Link
            asChild={true}
            href={"https://app.mutuals.finance"}
            target="_blank"
          >
            <Button size={"md"}>Launch app</Button>
          </Link>
        </Stack>
      </NavWrapper>
    </HeaderContainerWrapper>
  );
}
