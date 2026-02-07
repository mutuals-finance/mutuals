import { DocsLayout as FumaDocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
import { baseOptions } from "@/lib/layout.shared";

export default function DocsLayout({ children }: LayoutProps<"/">) {
  return (
    <FumaDocsLayout
      tree={source.getPageTree()}
      sidebar={{ tabs: false }}
      {...baseOptions()}
    >
      {children}
    </FumaDocsLayout>
  );
}
