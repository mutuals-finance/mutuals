import { DocsLayout as FumaDocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function DocsLayout({ children }: LayoutProps<"/">) {
  return (
    <FumaDocsLayout
      sidebar={{ tabs: false }}
      tree={source.getPageTree()}
      {...baseOptions()}
    >
      {children}
    </FumaDocsLayout>
  );
}
