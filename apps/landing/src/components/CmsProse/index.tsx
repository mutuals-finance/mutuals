import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import { ConditionalValue, Prose } from "@mutuals/ui";

export type CmsProseProps = {
  data?: SerializedEditorState;
  size?: ConditionalValue<"md" | "lg" | "xl" | "2xl" | "3xl" | undefined>;
};

export default function CmsProse({ data, size }: CmsProseProps) {
  const content = !data ? "" : convertLexicalToHTML({ data });

  return <Prose dangerouslySetInnerHTML={{ __html: content }} size={size} />;
}
