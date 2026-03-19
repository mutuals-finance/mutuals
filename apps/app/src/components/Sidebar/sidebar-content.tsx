import { type StackProps, VStack } from "@mutuals/ui";

export function SidebarContent({ children, ...props }: StackProps) {
  return (
    <VStack
      alignItems={"stretch"}
      flex={"1 0 auto"}
      gap={3}
      justifyContent={"space-between"}
      overflowX={"hidden"}
      overflowY={"auto"}
      p={"6"}
      {...props}
    >
      {children}
    </VStack>
  );
}
