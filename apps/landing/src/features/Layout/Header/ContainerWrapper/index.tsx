import { StackProps, Stack } from "@mutuals/ui";

export type HeaderContainerWrapperProps = StackProps;

export default function HeaderContainerWrapper({
  children,
  ...props
}: HeaderContainerWrapperProps) {
  return (
    <Stack position="fixed" top="0" left="0" w={"full"} zIndex={10} {...props}>
      {children}
    </Stack>
  );
}
