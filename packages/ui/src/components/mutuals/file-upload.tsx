"use client";

import { FileUploadDropzoneProps } from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";
import {
  FileUploadDropzone,
  FileUploadList,
  FileUploadRoot,
  FileUploadRootProps,
} from "../../components/ui/file-button";
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
          <FileUploadDropzone {...dropzoneProps} />
          <FileUploadList />
        </FileUploadRoot>
      )}
    />
  );
}
