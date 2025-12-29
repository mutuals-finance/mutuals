import { useMDXComponents as getNextraComponents } from "nextra/mdx-components";
import { TOC } from "@/theme/toc";
import {
  Box,
  Link,
  Blockquote,
  Text,
  Strong,
  Kbd,
  Code,
  CodeBlock,
} from "@mutuals/ui";
import {
  H1,
  H2,
  H3,
  H4,
  Ol,
  Ul,
  Li,
  Pre,
  Img,
  Table,
  Callout,
} from "@/components/mdx";

const defaultComponents = getNextraComponents({
  Box,
  a: Link,
  blockquote: Blockquote,
  img: Img,
  Image: Img,
  p: Text,
  strong: Strong,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  kbd: Kbd,
  pre: Pre,
  code: Code,
  ol: Ol,
  ul: Ul,
  li: Li,
  table: Table,
  // steps: Steps,
  callout: Callout,
  // "code-group": CodeGroup,
  // card: Card,
  // "card-group": CardGroup,
  // Card,
  // hr: Hr,
  // PropTable,
  // ComponentGrid,
  // FeaturedVideo,
  // Iframe,
  // ResourceCard: ResourceCard,
  "code-block": CodeBlock,
  // ColorTokenDoc,
  // ColorSemanticTokenDoc,
  // BorderRadiusTokenDoc,
  // BreakpointDoc,
  // AspectRatioTokenDoc,
  wrapper({ children, toc }) {
    return (
      <>
        <div style={{ flexGrow: 1, padding: 20 }}>{children}</div>
        <TOC toc={toc} />
      </>
    );
  },
});

export const useMDXComponents = (components = {}) => ({
  ...defaultComponents,
  ...components,
});
