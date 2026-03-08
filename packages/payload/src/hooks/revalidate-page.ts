import type { CollectionAfterChangeHook, TypeWithID } from "payload";
import { revalidatePath } from "next/cache";

export const revalidatePage: CollectionAfterChangeHook<TypeWithID> = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (
    "_status" in doc &&
    doc._status === "published" &&
    "slug" in doc &&
    typeof doc.slug === "string"
  ) {
    const path = `/blog/post/${doc.slug}`;

    payload.logger.info(`Revalidating post at path: ${path}`);

    revalidatePath(path);
  }

  // If the post was previously published, we need to revalidate the old path
  if (
    "_status" in previousDoc &&
    previousDoc._status === "published" &&
    "_status" in doc &&
    doc._status !== "published" &&
    "slug" in previousDoc &&
    typeof previousDoc.slug === "string"
  ) {
    const oldPath = `/blog/post/${previousDoc.slug}`;

    payload.logger.info(`Revalidating old post at path: ${oldPath}`);

    revalidatePath(oldPath);
  }

  return doc;
};
