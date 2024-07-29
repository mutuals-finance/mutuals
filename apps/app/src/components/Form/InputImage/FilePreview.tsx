import { IconButton } from "@mutuals/ui";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

import { FileWithPreview } from "../types";

interface FilePreviewProps {
  file: FileWithPreview;
  onDeleteFile?: (file: FileWithPreview) => void;
  readOnly?: boolean;
}

export default function FilePreview({
  onDeleteFile,
  file,
  readOnly,
}: FilePreviewProps) {
  return (
    <>
      <Image src={file.preview} alt={file.name || "File Preview"} fill={true} />
      {!readOnly && (
        <IconButton
          position={"absolute"}
          right={"3"}
          top={"3"}
          zIndex={"10"}
          size={"sm"}
          aria-label={"Remove image"}
          type={"button"}
          cursor={"default"}
          onClick={(e) => {
            e.stopPropagation();
            onDeleteFile?.(file);
          }}
          icon={<IoClose />}
        />
      )}
    </>
  );
}
