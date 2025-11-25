import { Container, ContainerProps, RouterTabs } from "@mutuals/ui";
import { PropsWithChildren } from "react";
import ShellPageHeader from "@/features/Shell/PageHeader";
import BlogHero from "@/features/Blog/Hero";

const tabs = [
  {
    title: "All",
    value: "all",
    href: `/blog`,
  },
  {
    title: "Product",
    value: "product",
    href: `/blog/product`,
  },
  {
    title: "Resources",
    value: "resources",
    href: `/blog/resources`,
  },
  {
    title: "Announcement",
    value: "announcement",
    href: `/blog/announcement`,
  },
];

export default function BlogTabs({ children }: ContainerProps) {
  return (
    <Container maxW={"7xl"}>
      <RouterTabs tabs={tabs} size={"lg"}>
        {children}
      </RouterTabs>
    </Container>
  );
}
