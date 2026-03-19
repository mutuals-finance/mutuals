"use client";

import { Controller, useFormContext } from "react-hook-form";
import type { BaseInputProps } from "../../components/mutuals/input";
import {
  FileUploadDropzone,
  type FileUploadDropzoneProps,
  FileUploadList,
  FileUploadRoot,
  type FileUploadRootProps,
} from "../../components/ui/file-upload";

export interface FileUploadProps
  extends Omit<BaseInputProps<unknown, unknown>, "transform">,
    FileUploadRootProps {
  dropzoneProps?: FileUploadDropzoneProps;
}

export function FileUpload({
  id = "",
  rules,
  dropzoneProps,
  ...props
}: FileUploadProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={id}
      render={({ field }) => (
        <FileUploadRoot {...props} {...field}>
          <FileUploadDropzone
            borderWidth={"1px"}
            label={dropzoneProps?.label ?? "unknown"}
            w={"full"}
            {...dropzoneProps}
          />
          <FileUploadList />
        </FileUploadRoot>
      )}
      rules={rules}
    />
  );
}
