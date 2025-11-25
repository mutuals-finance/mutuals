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
        <Box pt={{ base: "6", lg: "12" }}>{children}</Box>
      </BlogTabs>
    </>
  );
}
