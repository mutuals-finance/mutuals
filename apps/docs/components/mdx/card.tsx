import {
  HStack,
  Icon,
  IconProps,
  SimpleGrid,
  SimpleGridProps,
  Link,
  type LinkProps,
  Card as UiCard,
  Box,
} from "@mutuals/ui";
import { LuChevronRight } from "react-icons/lu";
import { ReactNode } from "react";

export const CardGroup = (props: SimpleGridProps) => {
  return <SimpleGrid gap="6" mt="6" mb="10" minChildWidth="240px" {...props} />;
};

const CardTitleIcon = (props: IconProps) => {
  return (
    <Icon
      opacity="0"
      translate="-4px 0"
      transition="opacity 0.2s, translate 0.2s"
      _groupHover={{ opacity: "1", translate: "0" }}
      _groupFocus={{ opacity: "1", translate: "0" }}
      {...props}
      asChild
    />
  );
};

export type CardProps = {
  href: LinkProps["href"];
  icon?: ReactNode;
  title: string;
  children: ReactNode;
};

export const Card = (props: CardProps) => {
  const { icon, title, children, href } = props;

  return (
    <Link href={href} className="group" alignItems={"stretch"} asChild={true}>
      <UiCard.Root _groupHover={{ bg: "bg.subtle" }} transition="colors 0.2s">
        <UiCard.Body gap="2" flex={"1"}>
          {icon && <Icon boxSize="2em">{icon}</Icon>}
          <UiCard.Title>
            <HStack gap="1">
              {title}
              <CardTitleIcon>
                <LuChevronRight />
              </CardTitleIcon>
            </HStack>
          </UiCard.Title>
          <Box textStyle={"sm"} color={"fg.muted"}>
            {children}
          </Box>
        </UiCard.Body>
      </UiCard.Root>
    </Link>
  );
};
