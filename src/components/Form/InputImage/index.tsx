import React, { ForwardedRef } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import { Controller, get, useFormContext } from 'react-hook-form';

import { formatBytes, formatStringItems } from '@/lib/utils';
import clsxm from '@/lib/utils/clsxm';

import InputHintAndError from '@/components/Form/InputHintAndError';
import FilePlaceholder from '@/components/Form/InputImage/FilePlaceholder';
import FilePreview from '@/components/Form/InputImage/FilePreview';
import { InputDefaultProps } from '@/components/Form/types';

import { FileWithPreview } from '../types';

export interface InputImageProps extends Omit<InputDefaultProps, 'type'> {
  maxFiles?: number;
  maxSize?: number;
  acceptedImageExtensions?: string[];
}

const InputImage = React.forwardRef(
  (
    {
      label,
      placeholder = 'Drag and drop your file here, or click to choose an image.',
      id,
      readOnly = false,
      hideError = false,
      validation,
      maxFiles = 1,
      maxSize = 5242880, // 5 MiB
      acceptedImageExtensions = ['.png', '.jpg', '.jpeg'],
      helperText = `You can upload files with ${formatStringItems(
        acceptedImageExtensions
      )} extension and a maximum size of ${formatBytes(maxSize)}.`,
    }: InputImageProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
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

    React.useEffect(() => {
      error && dropzoneRef.current?.focus();
    }, [error]);

    const [files, setFiles] = React.useState<FileWithPreview[]>(
      getValues(id) || []
    );

    const onDrop = React.useCallback(
      <T extends File>(acceptedFiles: T[], rejectedFiles: FileRejection[]) => {
        if (rejectedFiles && rejectedFiles.length > 0) {
          setValue(id, files ? [...files] : null);
          setError(id, {
            type: 'manual',
            message: rejectedFiles && rejectedFiles[0]?.errors[0]?.message,
          });
        } else {
          const acceptedFilesPreview = acceptedFiles.map((file: T) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          );

          setFiles(
            files
              ? [...files, ...acceptedFilesPreview].slice(0, maxFiles)
              : acceptedFilesPreview
          );

          setValue(
            id,
            files
              ? [...files, ...acceptedFiles].slice(0, maxFiles)
              : acceptedFiles,
            {
              shouldValidate: true,
            }
          );
          clearErrors(id);
        }
      },
      [clearErrors, files, id, maxFiles, setError, setValue]
    );

    const onDeleteFile = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      file: FileWithPreview
    ) => {
      e.preventDefault();
      const newFiles = [...files];

      newFiles.splice(newFiles.indexOf(file), 1);

      setFiles(newFiles);
      setValue(id, newFiles.length > 0 ? newFiles : null, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    };

    React.useEffect(() => {
      return () => {
        files.forEach((file) => URL.revokeObjectURL(file.preview));
      };
    }, [files]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: { 'image/*': acceptedImageExtensions },
      maxFiles,
      multiple: maxFiles > 1,
      maxSize,
    });

    return (
      <div className={clsxm(!!error && 'error')}>
        {!!label && (
          <label className={'label'} htmlFor={id}>
            {label}
          </label>
        )}

        <Controller
          control={control}
          name={id}
          rules={validation}
          render={({ field: { value, ...field } }) => (
            <>
              <div
                {...getRootProps()}
                ref={dropzoneRef}
                className={clsxm(
                  'input-default',
                  'relative flex h-52 w-52 cursor-pointer overflow-hidden border-dashed p-0 hover:border-neutral-400 dark:hover:border-neutral-500',
                  isDragActive && 'border-neutral-400 dark:border-neutral-500',
                  error && 'hover:border-error dark:hover:border-error'
                )}
              >
                <input id={id} {...getInputProps(field)} ref={ref} />

                {!files?.length || files?.length < 1 ? (
                  <FilePlaceholder placeholder={placeholder} />
                ) : (
                  files.map((file, index) => (
                    <FilePreview
                      key={index}
                      readOnly={readOnly}
                      file={file}
                      onDeleteFile={onDeleteFile}
                    />
                  ))
                )}
              </div>

              <InputHintAndError {...{ helperText, hideError, error }} />
            </>
          )}
        />
      </div>
    );
  }
);

InputImage.displayName = 'InputImage';

export default InputImage;
