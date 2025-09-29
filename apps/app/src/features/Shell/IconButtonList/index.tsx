import {
  Box,
  BoxProps,
  Flex,
  IconTextButton,
  IconTextButtonProps,
  ScrollArea,
} from "@mutuals/ui";

interface ShellIconButtonListProps extends BoxProps {
  items: IconTextButtonProps[];
}

export default function ShellIconButtonList({
  children,
  items,
  ...props
}: ShellIconButtonListProps) {
  return (
    <ScrollArea.Root w="full" size="xs" {...props}>
      <ScrollArea.Viewport>
        <ScrollArea.Content py="4" px={"6"}>
          <Flex gap={{ base: "2", lg: "6" }} flexWrap="nowrap">
            {items.map((props, i) => (
              <Box
                key={`${i}-${props["aria-label"]}`}
                flexShrink={"0"}
                w={"24"}
              >
                <IconTextButton {...props} />
              </Box>
            ))}
          </Flex>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="horizontal" />
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
}
