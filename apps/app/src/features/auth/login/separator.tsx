import { HStack, Separator, type StackProps, Text } from "@mutuals/ui";

export default function AuthLoginSeparator(props: StackProps) {
  return (
    <HStack {...props}>
      <Separator flex="1" />
      <Text
        color={"fg.muted"}
        flexShrink="0"
        textStyle={"sm"}
        textTransform="uppercase"
      >
        Or
      </Text>
      <Separator flex="1" />
    </HStack>
  );
}
