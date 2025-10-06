"use client";

import { PresenceProps, Stack, Presence, Theme } from "@mutuals/ui";
import { useHeaderObserver } from "@/providers/HeaderObserver";

export type HeaderContainerWrapperProps = PresenceProps;

export default function HeaderContainerWrapper({
  children,
  ...props
}: HeaderContainerWrapperProps) {
  /* const { scrollY } = useScroll();

  const [isTransparent, setTransparent] = useState(true);

  const transparentThreshold = 1;

  const onUpdate = useCallback(
    (latest: number) => {
      if (!isTransparent && latest <= transparentThreshold) {
        setTransparent(true);
      } else if (isTransparent && latest > transparentThreshold) {
        setTransparent(false);
      }
    },
    [isTransparent],
  );

  useEffect(() => onUpdate(0), []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    onUpdate(latest);
  });*/
  const { initialized, headerTheme } = useHeaderObserver();

  return (
    <Presence
      present={initialized}
      animationName={{ _open: "fade-in", _closed: "fade-out" }}
      animationDuration="moderate"
      {...props}
    >
      <Theme appearance={headerTheme as "light" | "dark"}>
        <Stack position="fixed" top="0" left="0" w={"full"} zIndex={10}>
          {children}
        </Stack>
      </Theme>
    </Presence>
  );
}
