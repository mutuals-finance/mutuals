import { Table as ChakraTable } from "@mutuals/ui";

export const Table = (props: ChakraTable.RootProps) => {
  return (
    <ChakraTable.Root
      native
      size="sm"
      variant="line"
      {...props}
      css={{
        marginTop: "2em",
        marginBottom: "2em",
      }}
    />
  );
};
