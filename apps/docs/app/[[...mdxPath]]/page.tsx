import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../mdx-components";
import { MDXPagination } from "@/components/mdx-pagination";
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

  return (
    <Wrapper {...result}>
      <PageHeader {...result} />
      <MDXContent params={params} />
      <MDXPagination />
    </Wrapper>
  );
}
