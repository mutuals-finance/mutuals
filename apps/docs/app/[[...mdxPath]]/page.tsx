import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../mdx-components";
import { Stack, Box } from "@mutuals/ui";
import { SidebarEnd } from "@/theme/sidebar";
import { TOC } from "@/theme/toc";
import { PageHeader } from "@/components/page-header";

export type PageProps = {
  params: any;
};

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata(props: { params: any }) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath);
  return metadata;
}

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props: PageProps) {
  const params = await props.params;
  const { default: MDXContent, ...result } = await importPage(params.mdxPath);
  const { toc } = result;

  return (
    <>
      <Stack
        flex="1"
        w="full"
        px={{ md: "12" }}
        pt="10"
        pb="16"
        overflow="auto"
        minHeight="var(--content-height)"
      >
        <PageHeader {...result} />
        <Box>
          <MDXContent {...props} params={params} />
          {/*
          <MDXPagination />
*/}
        </Box>
      </Stack>

      <SidebarEnd id="toc" visibility={toc.length === 0 ? "hidden" : undefined}>
        <TOC {...result} />
        <Stack borderTopWidth="1px" pt="4" align="start">
          {/*
            <EditPageButton href={`${docsConfig.editUrl}/${page.slug}.mdx`} />
*/}
          {/*
          <ScrollToTop />
*/}
        </Stack>
      </SidebarEnd>

      {/*
      <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
        <MDXContent {...props} params={params} />
      </Wrapper>
*/}
    </>
  );
}
