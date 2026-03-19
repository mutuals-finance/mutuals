import { type ConditionalValue, Prose } from "@mutuals/ui";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export interface CmsProseProps {
  data?: SerializedEditorState;
  size?: ConditionalValue<"md" | "lg" | "xl" | "2xl" | "3xl" | undefined>;
}

export default function CmsProse({ data, size }: CmsProseProps) {
  const content = data ? convertLexicalToHTML({ data }) : "";

  // biome-ignore lint/security/noDangerouslySetInnerHtml: content is sanitized by payloadcms lexical converter
  return <Prose dangerouslySetInnerHTML={{ __html: content }} size={size} />;
}
