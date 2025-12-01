import {
  Container,
  ContainerProps,
  RouterTabs,
  RouterTabsProps,
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
      <RouterTabs tabs={tabs} size={"lg"} {...tabsProps}>
        {children}
      </RouterTabs>
    </Container>
  );
}
