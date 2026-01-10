"use client";

import { Link, Button } from "@mutuals/ui";
import { PageMapItem } from "nextra";
import { usePathname } from "next/navigation";
import { IoLogoGithub } from "react-icons/io5";

export type EditPageButtonProps = { pageMap: PageMapItem[]; editUrl: string };

export const EditPageButton = ({ editUrl }: EditPageButtonProps) => {
  const pathname = usePathname();

  return (
    <Link href={`${editUrl}${pathname}.mdx`} external={true} asChild={true}>
      <Button
        variant={"ghost"}
        size={"xs"}
        w={"full"}
        textAlign={"left"}
        justifyContent={"flex-start"}
      >
        <IoLogoGithub />
        Edit page on GitHub
      </Button>
    </Link>
  );
};
