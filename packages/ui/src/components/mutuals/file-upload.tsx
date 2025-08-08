"use client";

import { Controller, useFormContext } from "react-hook-form";
import {
  FileUploadDropzone,
  FileUploadList,
  FileUploadRoot,
  FileUploadRootProps,
  FileUploadDropzoneProps,
} from "../../components/ui/file-upload";
import { BaseInputProps } from "../../components/mutuals/input";

export interface FileUploadProps extends BaseInputProps, FileUploadRootProps {
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
      control={control!}
      name={id}
      rules={rules}
      render={({ field }) => (
        <FileUploadRoot {...props} {...field}>
          <FileUploadDropzone
            label={dropzoneProps?.label ?? "unknown"}
            {...dropzoneProps}
          />
          <FileUploadList />
        </FileUploadRoot>
      )}
    />
  );
}
