import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import { Prose } from "@mutuals/ui";

export type CmsProseProps = { data?: SerializedEditorState };

export default function CmsProse({ data }: CmsProseProps) {
  const content = !data ? "" : convertLexicalToHTML({ data });

  return <Prose dangerouslySetInnerHTML={{ __html: content }} />;
}
