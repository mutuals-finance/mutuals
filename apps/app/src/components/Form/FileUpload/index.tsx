import {
  FileUploadDropzone,
  FileUploadList,
  FileUploadRoot,
  FileUploadRootProps,
} from "@mutuals/ui";
import { Controller, useFormContext } from "react-hook-form";
import React from "react";
import InputBase from "@/components/Form/InputBase";
import { InputBaseProps } from "@/components/Form/types";

export interface FileUploadProps extends InputBaseProps {
  inputProps?: FileUploadRootProps;
}

export default function FileUpload({
  id = "",
  validation,
  inputProps,
  ...props
}: FileUploadProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control!}
      name={id}
      rules={validation!}
      render={({ field }) => (
        <>
          <InputBase {...props} id={id}>
            <FileUploadRoot {...inputProps} {...field}>
              <FileUploadDropzone minH={"3xs"} />
              <FileUploadList />
            </FileUploadRoot>
          </InputBase>
        </>
      )}
    />
  );
}
