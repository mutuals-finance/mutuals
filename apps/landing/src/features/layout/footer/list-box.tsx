import {
  GridItem,
  type GridItemProps,
  Heading,
  Link,
  type LinkProps,
  Stack,
} from "@mutuals/ui";

interface FooterListBoxProps extends GridItemProps {
  links?: LinkProps[];
  title?: string;
}

export default function FooterListBox({
  title,
  links = [],
  children,
  ...props
}: FooterListBoxProps) {
  return (
    <GridItem alignItems="flex-start" as={Stack} gap={"3"} {...props}>
      {!!title && (
        <Heading as={"h4"} mb="3" size={"xs"} variant={"subtag"}>
          {title}
        </Heading>
      )}
      {links.length > 0 &&
        links.map((props, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: links are static and have no stable unique id
          <Link fontSize={"sm"} key={index} {...props} />
        ))}
      {children}
    </GridItem>
  );
}
