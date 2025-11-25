import ShellPageHeader from "@/features/Shell/PageHeader";
import BlogHero from "@/features/Blog/Hero";
import { PropsWithChildren } from "react";
import { Box } from "@mutuals/ui";
import BlogTabs from "@/features/Blog/Tabs";

export default function BlogLayout({ children }: PropsWithChildren) {
  return (
    <>
      <ShellPageHeader tag={"Blog"}>
        Updates from the Mutuals team
      </ShellPageHeader>
      <BlogHero />
      <BlogTabs>
        <Box my={"6"}>{children}</Box>
      </BlogTabs>
    </>
  );
}
