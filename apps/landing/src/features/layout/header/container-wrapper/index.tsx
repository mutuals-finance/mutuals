import { Stack, type StackProps } from "@mutuals/ui";

export type HeaderContainerWrapperProps = StackProps;

export default function HeaderContainerWrapper({
  children,
  ...props
}: HeaderContainerWrapperProps) {
  return (
    <Stack left="0" position="fixed" top="0" w={"full"} zIndex={10} {...props}>
      {children}
    </Stack>
  );
}
