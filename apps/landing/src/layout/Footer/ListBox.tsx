import {
  Stack,
  type GridItemProps,
  Link,
  type LinkProps,
  GridItem,
  Text,
} from "@mutuals/ui";

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
    <GridItem as={Stack} align="flex-start" spacing={"3"} {...props}>
      {!!title && (
        <Text mb="3" variant={"tag"} fontSize={"xs"}>
          {title}
        </Text>
      )}
      {links.length > 0 &&
        links.map((props, index) => (
          <Link fontSize={"sm"} key={index} {...props} />
        ))}
      {children}
    </GridItem>
  );
}
