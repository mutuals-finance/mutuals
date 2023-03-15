import React, { useMemo } from "react";
import { IoImage } from "react-icons/io5";
import Image from "next/image";
import { StaticImageData } from "next/dist/client/image";

interface SplitImageInnerProps {
  alt?: string;
  src?: StaticImageData | string;
}

interface SplitImageProps extends SplitImageInnerProps {
  file?: File;
}

function ipfsUrlFromUri(uri: string) {
  return uri.replace("ipfs://", "https://cloudflare-ipfs.com/ipfs/");
}

function SplitImageInner({ src, alt }: SplitImageInnerProps) {
  return !!src ? (
    <Image
      className={"object-cover w-12 h-12 rounded-full"}
      src={src}
      alt={alt || "Unknown Split"}
      width={48}
      height={48}
    />
  ) : (
    <IoImage className={"block text-neutral-900"} />
  );
}
export function SplitImage({ file, src, alt }: SplitImageProps) {
  const srcOrFile = !!file
    ? URL.createObjectURL(file)
    : typeof src === "string"
    ? ipfsUrlFromUri(src)
    : src;

  return (
    <div
      className={
        "relative flex flex-1 items-center justify-center rounded-full w-12 h-12 bg-default-2"
      }
    >
      <SplitImageInner src={srcOrFile} alt={alt} />
    </div>
  );
}
