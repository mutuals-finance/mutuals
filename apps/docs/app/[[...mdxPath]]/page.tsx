import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../mdx-components";
import { MDXPagination } from "@/components/mdx-pagination";
import { getPageMap } from "nextra/page-map";
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

export default async function Page({ params: _params, ...props }: PageProps) {
  const params = await _params;
  const { default: MDXContent, ...result } = await importPage(params.mdxPath);
  const pageMap = await getPageMap();

  return (
    <Wrapper {...result}>
      <PageHeader pageMap={pageMap} {...result} />
      <MDXContent params={params} {...props} />
      <MDXPagination pageMap={pageMap} />
    </Wrapper>
  );
}
