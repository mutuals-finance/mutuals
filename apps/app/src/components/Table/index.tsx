import { Table as ChakraTable } from "@mutuals/ui";
import {
  getCoreRowModel,
  type RowData,
  type TableOptions,
  useReactTable,
} from "@tanstack/react-table";

import BodyRow, { type BodyRowProps } from "@/components/table/body-row";
import HeaderRow, { type HeaderRowProps } from "@/components/table/header-row";

export interface TableProps<TData extends RowData>
  extends Omit<TableOptions<TData>, "getCoreRowModel"> {
  bodyProps?: ChakraTable.BodyProps;
  bodyRowProps?: Pick<BodyRowProps<TData>, "cellProps">;
  containerProps?: ChakraTable.ScrollAreaProps;
  headerHidden?: boolean;
  headerProps?: ChakraTable.HeaderProps;
  headerRowProps?: Pick<HeaderRowProps<TData>, "cellProps">;
  tableProps?: ChakraTable.RootProps & { showRowBorder?: boolean };
}

export default function Table<TData extends RowData>({
  containerProps,
  headerProps,
  headerHidden = false,
  tableProps,
  headerRowProps,
  bodyRowProps,
  bodyProps,
  ...props
}: TableProps<TData>) {
  const table = useReactTable<TData>({
    getCoreRowModel: getCoreRowModel(),
    ...props,
  });

  return (
    <ChakraTable.ScrollArea w="full" {...containerProps}>
      <ChakraTable.Root w="full" {...tableProps}>
        {!headerHidden && (
          <ChakraTable.Header {...headerProps}>
            {table?.getHeaderGroups()?.map((headerGroup) => (
              <HeaderRow<TData>
                {...headerGroup}
                {...headerRowProps}
                key={headerGroup.id}
              />
            ))}
          </ChakraTable.Header>
        )}
        <ChakraTable.Body {...bodyProps}>
          {table?.getRowModel()?.rows?.map((row) => (
            <BodyRow<TData>
              {...row}
              showRowBorder={tableProps?.showRowBorder}
              {...bodyRowProps}
              key={row.id}
            />
          ))}
        </ChakraTable.Body>
      </ChakraTable.Root>
    </ChakraTable.ScrollArea>
  );
}
