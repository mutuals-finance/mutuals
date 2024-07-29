import {
  Stack,
  type GridItemProps,
  Link,
  type LinkProps,
  GridItem,
  Text,
} from "@splitfi/ui";

interface FooterListBoxProps extends GridItemProps {
  title?: string;
  links?: LinkProps[];
}

export default function FooterListBox({
  title,
  links = [],
  children,
  ...props
}: FooterListBoxProps) {
  return (
    <GridItem as={Stack} align="flex-start" spacing={"1.5"} {...props}>
      <Text mb="3" variant={"tag"} fontSize={"xs"}>
        {title}
      </Text>
      {links.length > 0 &&
        links.map((props, index) => <Link key={index} {...props} />)}
      {children}
    </GridItem>
  );
}
