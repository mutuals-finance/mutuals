import {
  Stack,
  type StackProps,
  GridItem,
  type GridItemProps,
  Heading,
  type HeadingProps,
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
            variant={"subtag"}
            textStyle={"xs"}
            mb="2"
            {...titleProps}
          >
            {title}
          </Heading>
        )}
        {links.length > 0 &&
          links.map((props, index) => (
            <Link textStyle={"sm"} variant="plain" key={index} {...props} />
          ))}
        {children}
      </Stack>
    </GridItem>
  );
}
