import { type BoxProps, type HeadingProps, Box, Heading } from "@mutuals/ui";

export interface ShellSectionHeaderProps extends BoxProps {
  label?: string;
  headingProps?: HeadingProps;
}

export default function ShellSectionHeader({
  children,
  label,
  headingProps,
  ...props
}: ShellSectionHeaderProps) {
  return (
    <Box maxW="2xl" mx="auto" textAlign={"center"} mb="12" {...props}>
      {!!label && (
        <Heading as={"h4"} variant={"subtag"} size={"xs"} mb="6">
          {label}
        </Heading>
      )}
      <Heading size={{ base: "4xl", lg: "5xl" }} color={"fg"} {...headingProps}>
        {children}
      </Heading>
    </Box>
  );
}
