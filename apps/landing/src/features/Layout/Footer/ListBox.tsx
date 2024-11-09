import {
  Stack,
  type GridItemProps,
  Link,
  type LinkProps,
  GridItem,
  Heading,
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
    <GridItem as={Stack} alignItems="flex-start" gap={"3"} {...props}>
      {!!title && (
        <Heading as={"h4"} variant={"subtag"} size={"xs"} mb="3">
          {title}
        </Heading>
      )}
      {links.length > 0 &&
        links.map((props, index) => (
          <Link fontSize={"sm"} key={index} {...props} />
        ))}
      {children}
    </GridItem>
  );
}
