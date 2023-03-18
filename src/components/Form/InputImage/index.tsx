import React, { ForwardedRef } from 'react';
import { Accept, FileRejection, useDropzone } from 'react-dropzone';
import { Controller, get, useFormContext } from 'react-hook-form';
import { IoImage } from 'react-icons/io5';

import clsxm from '@/lib/utils/clsxm';

import FilePreview from '@/components/Form/InputImage/FilePreview';

import { FileWithPreview } from './types';

interface InputImageProps {
  accept?: Accept;
  helperText?: string;
  id: string;
  label?: string;
  maxFiles?: number;
  readOnly?: boolean;
  validation?: Record<string, unknown>;
}

const InputImage = React.forwardRef(
  (
    {
      accept,
      helperText = '',
      id,
      label,
      maxFiles = 1,
      validation,
      readOnly,
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

      if (newFiles.length > 0) {
        setFiles(newFiles);
        setValue(id, newFiles, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        });
      } else {
        setFiles([]);
        setValue(id, null, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        });
      }
    };

    React.useEffect(() => {
      return () => {
        files.forEach((file) => URL.revokeObjectURL(file.preview));
      };
    }, [files]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept,
      maxFiles,
      multiple: maxFiles > 1,
      maxSize: 1000000,
    });

    return (
      <div>
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
                  'group relative z-50 flex h-52 w-52 cursor-pointer overflow-hidden p-0 hover:ring-1',
                  isDragActive && 'ring-1',
                  error
                    ? 'border-red-500 group-focus:border-red-500'
                    : 'group-focus:border-primary-500'
                )}
              >
                <input {...getInputProps(field)} ref={ref} />

                {!files?.length || files?.length < 1 ? (
                  <div
                    className={
                      'flex w-full flex-1 flex-col items-center justify-center space-y-3 p-6 text-center'
                    }
                  >
                    <div>
                      <IoImage
                        className={
                          'text-2xl text-neutral-500 dark:text-neutral-400'
                        }
                      />
                    </div>
                    <div
                      className={
                        'text-xs text-neutral-500 dark:text-neutral-400'
                      }
                    >
                      <p>
                        Drag and drop your file here, or click to choose a file.
                      </p>
                    </div>
                  </div>
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
              {helperText !== '' && (
                <p
                  className={
                    'mt-1 text-xs text-neutral-500 dark:text-neutral-400'
                  }
                >
                  {helperText}
                </p>
              )}

              <div className='mt-1'>
                {error && (
                  <p className='text-sm text-red-500'>
                    {error.message?.toString()}
                  </p>
                )}
              </div>
            </>
          )}
        />
      </div>
    );
  }
);

InputImage.displayName = 'InputImage';

export default InputImage;
