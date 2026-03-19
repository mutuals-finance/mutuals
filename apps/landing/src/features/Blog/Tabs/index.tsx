import {
  Container,
  type ContainerProps,
  RouterTabs,
  type RouterTabsProps,
} from "@mutuals/ui";

export type BlogTabsProps = ContainerProps & {
  tabs?: RouterTabsProps["tabs"];
  tabsProps?: Omit<RouterTabsProps, "tabs">;
};

export default function BlogTabs({
  children,
  tabs,
  tabsProps,
  ...props
}: BlogTabsProps) {
  return (
    <Container maxW={"7xl"} {...props}>
      <RouterTabs size={"lg"} tabs={tabs} {...tabsProps}>
        {children}
      </RouterTabs>
    </Container>
  );
}
