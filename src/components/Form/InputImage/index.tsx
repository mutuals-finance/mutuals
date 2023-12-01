import { Box, useMultiStyleConfig } from '@chakra-ui/react';
import React from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import { Controller, get, useFormContext } from 'react-hook-form';

import { formatBytes, formatStringItems } from '@/lib/utils';

import InputBase from '@/components/Form/InputBase';
import FilePlaceholder from '@/components/Form/InputImage/FilePlaceholder';
import FilePreview from '@/components/Form/InputImage/FilePreview';
import { BaseFieldProps } from '@/components/Form/types';

import { FileWithPreview } from '../types';

export interface InputImageProps extends BaseFieldProps {
  maxSize?: number;
  acceptedImageExtensions?: string[];
}

export default function InputImage({
  placeholder = 'Drag and drop your file here, or click to choose an image.',
  id = '',
  readOnly = false,
  validation,
  maxSize = 5242880, // 5 MiB
  acceptedImageExtensions = ['.png', '.jpg', '.jpeg'],
  helperText = `You can upload files with ${formatStringItems(
    acceptedImageExtensions,
  )} extension and a maximum size of ${formatBytes(maxSize)}.`,
  ...props
}: InputImageProps) {
  const {
    control,
    getValues,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, id);

  const dropzoneRef = React.useRef<HTMLDivElement>(null);

  const maxFiles = 1;

  React.useEffect(() => {
    error && dropzoneRef.current?.focus();
  }, [error]);

  const [file, setFile] = React.useState<FileWithPreview | null>(getValues(id));

  const onDrop = React.useCallback(
    <T extends File>(acceptedFiles: T[], rejectedFiles: FileRejection[]) => {
      if (rejectedFiles && rejectedFiles.length > 0) {
        setError(id, {
          type: 'manual',
          message: rejectedFiles && rejectedFiles[0]?.errors[0]?.message,
        });
      } else {
        const newFile = acceptedFiles[0] as T;
        const newFilePreview = Object.assign(newFile, {
          preview: URL.createObjectURL(newFile),
        });

        setFile(newFilePreview);

        setValue(id, newFilePreview, {
          shouldValidate: true,
        });

        clearErrors(id);
      }
    },
    [clearErrors, file, id, maxFiles, setError, setValue],
  );

  const onDeleteFile = () => {
    setFile(null);
    setValue(id, null, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  React.useEffect(() => {
    return () => {
      !!file && URL.revokeObjectURL(file.preview.toString());
    };
  }, [file]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': acceptedImageExtensions },
    maxFiles,
    multiple: maxFiles > 1,
    maxSize,
  });

  const { field: fieldStyles } = useMultiStyleConfig('Input');

  const dragActiveStyles = isDragActive
    ? (fieldStyles as { _focusVisible: object })?._focusVisible
    : {};

  return (
    <InputBase id={id} helperText={helperText} {...props}>
      <Controller
        control={control}
        name={id}
        rules={validation}
        render={({ field: { value: _, ...field } }) => (
          <Box
            {...getRootProps()}
            ref={dropzoneRef}
            __css={fieldStyles}
            {...dragActiveStyles}
            p={'0'}
            w={'48'}
            h={'48'}
            cursor={'pointer'}
            display={'flex'}
          >
            <input id={id} {...getInputProps(field)} />

            {!!file ? (
              <FilePreview
                readOnly={readOnly}
                file={file}
                onDeleteFile={onDeleteFile}
              />
            ) : (
              <FilePlaceholder placeholder={placeholder} />
            )}
          </Box>
        )}
      />
    </InputBase>
  );
}
