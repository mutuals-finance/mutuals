import {
  Box,
  type BoxProps,
  Flex,
  IconTextButton,
  type IconTextButtonProps,
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
    <ScrollArea.Root size="xs" w="full" {...props}>
      <ScrollArea.Viewport>
        <ScrollArea.Content px={"6"} py="4">
          <Flex flexWrap="nowrap" gap={{ base: "2", lg: "6" }}>
            {items.map((props) => (
              <Box flexShrink={"0"} key={props["aria-label"]} w={"24"}>
                <IconTextButton {...props} />
              </Box>
            ))}
          </Flex>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
}
