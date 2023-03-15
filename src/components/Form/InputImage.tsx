import React, {
  ForwardedRef,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { IoImage } from "react-icons/io5";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import Image from "next/image";

interface InputImagePreviewProps {
  value?: File;
}

interface InputImageProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onDrop" | "value"
  > {
  label?: string;
  onDrop: DropzoneOptions["onDrop"];
  value?: InputImagePreviewProps["value"];
}

type InputImageDropzoneProps = Omit<InputImageProps, "label" | "value">;

function InputImagePreview({ value }: InputImagePreviewProps) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (!value) {
      setUrl("");
      return;
    }
    const objectUrl = URL.createObjectURL(value);
    setUrl(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [value]);

  return (
    <div
      className={
        "relative flex flex-1 items-center justify-center rounded-full"
      }
    >
      {!(value && !!url) ? (
        <IoImage className={"block text-2xl text-current"} />
      ) : (
        <Image
          className={"object-cover rounded-full"}
          src={url}
          fill
          alt={value.name}
        />
      )}
    </div>
  );
}

const InputImageDropzone = React.forwardRef(
  (
    { onDrop, children, ...props }: PropsWithChildren<InputImageDropzoneProps>,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      multiple: false,
      accept: { "image/*": [] },
    });

    return (
      <div
        {...getRootProps({
          className: `relative w-32 h-32 flex rounded-full bg-default ring-1 ring-transparent hover:ring-neutral-900 dark:hover:ring-neutral-50 overflow-hidden transition ${
            isDragActive
              ? "hover:ring-neutral-900 dark:hover:ring-neutral-50"
              : ""
          }`,
        })}
      >
        {children}
        <input
          className={"block absolute top-0 left-0 w-full h-full rounded-full"}
          {...getInputProps()}
          {...props}
          ref={ref}
        />
      </div>
    );
  }
);

InputImageDropzone.displayName = "InputImageDropzone";

const InputImage = React.forwardRef(
  (
    { label, onDrop, value, ...props }: InputImageProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const inputComponent = (
      <InputImageDropzone {...props} onDrop={onDrop} ref={ref}>
        <InputImagePreview value={value} />
      </InputImageDropzone>
    );

    return !!label ? (
      <div>
        <label className={"label mb-1"} htmlFor={props.id}>
          {label}
        </label>
        {inputComponent}
      </div>
    ) : (
      inputComponent
    );
  }
);

InputImage.displayName = "InputImage";

export default InputImage;
