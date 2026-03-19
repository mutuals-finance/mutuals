import {
  GridItem,
  type GridItemProps,
  Heading,
  type HeadingProps,
  Stack,
  type StackProps,
} from "@chakra-ui/react";
import { Link, type LinkProps } from "./link";

export type LinkListBoxProps = GridItemProps & {
  title?: string;
  links?: LinkProps[];
  titleProps?: HeadingProps;
  stackProps?: StackProps;
};

export function LinkListBox({
  title,
  links = [],
  titleProps,
  stackProps,
  children,
  ...props
}: LinkListBoxProps) {
  return (
    <GridItem {...props}>
      <Stack alignItems="flex-start" gap={"2"} {...stackProps}>
        {!!title && (
          <Heading
            as={"h4"}
            mb="2"
            textStyle={"xs"}
            variant={"subtag"}
            {...titleProps}
          >
            {title}
          </Heading>
        )}
        {links.length > 0 &&
          links.map((props, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static link lists have no stable unique id
            <Link key={index} textStyle={"sm"} variant="plain" {...props} />
          ))}
        {children}
      </Stack>
    </GridItem>
  );
}
