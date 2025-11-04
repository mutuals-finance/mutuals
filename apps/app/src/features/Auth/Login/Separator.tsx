import { HStack, Separator, StackProps, Text } from "@mutuals/ui";

export default function AuthLoginSeparator(props: StackProps) {
  return (
    <HStack {...props}>
      <Separator flex="1" />
      <Text
        flexShrink="0"
        color={"fg.muted"}
        textTransform="uppercase"
        textStyle={"sm"}
      >
        Or
      </Text>
      <Separator flex="1" />
    </HStack>
  );
}
