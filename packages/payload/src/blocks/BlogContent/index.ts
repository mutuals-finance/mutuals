import type { Block } from "payload";

import { blockFields, richText } from "../../fields";

export const BlogContent: Block = {
  slug: "blogContent",
  fields: [
    blockFields({
      name: "blogContentFields",
      fields: [richText()],
    }),
  ],
};
