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
      <ScrollArea.Viewport
      /* css={{
            "--scroll-shadow-size": "2rem",
            maskImage:
              "linear-gradient(to right, #000, #000, transparent 0, #000 var(--scroll-shadow-size), #000 calc(100% - var(--scroll-shadow-size)), transparent)",
            "&[data-at-left]": {
              maskImage:
                "linear-gradient(to right, #000 calc(100% - var(--scroll-shadow-size)), transparent)",
            },
            "&[data-at-right]": {
              maskImage:
                "linear-gradient(to left, #000 calc(100% - var(--scroll-shadow-size)), transparent)",
            },
          }}*/
      >
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
