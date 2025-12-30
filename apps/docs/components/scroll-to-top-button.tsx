"use client";

import { Button } from "@mutuals/ui";
import { LuCircleArrowUp } from "react-icons/lu";
import { useWindowScroll } from "react-use";

export const ScrollToTopButton = () => {
  const { y } = useWindowScroll();
  const scrollThreshold = 100;

  const show = y > scrollThreshold;

  return (
    <Button
      variant={"ghost"}
      size={"xs"}
      w={"full"}
      textAlign={"left"}
      justifyContent={"flex-start"}
      animationDuration="0.2s"
      animationFillMode="forwards"
      data-state={show ? "open" : "closed"}
      _open={{ animationName: "fade-in" }}
      _closed={{ animationName: "fade-out" }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <LuCircleArrowUp />
      Scroll to top
    </Button>
  );
};
