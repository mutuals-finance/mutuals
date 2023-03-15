import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { ButtonLink } from "@/components/Button";
import Image, { ImageProps } from "next/image";

interface ChainButtonProps {
  src: ImageProps["src"];
  alt: ImageProps["alt"];
}
export default function ChainButton({ src, alt }: ChainButtonProps) {
  return (
    <ButtonLink
      size={"sm"}
      icon={<Image className={"w-4 h-4"} height={8} src={src} alt={alt} />}
      iconAfter={
        <IoChevronDown className="ui-open:rotate-180 ui-open:transform ease-out-expo duration-100" />
      }
    >
      {alt}
    </ButtonLink>
  );
}
