import { StackProps, Stack } from "@mutuals/ui";

export type HeaderContainerWrapperProps = StackProps;

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
  /*
  const { initialized, headerTheme } = useHeaderObserver();
*/

  return (
    /*
    <ClientOnly>
      <AnimatePresence>
        {initialized && (
          <MotionBox
            key="container-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Theme appearance={headerTheme as "light" | "dark"}>
*/
    <Stack position="fixed" top="0" left="0" w={"full"} zIndex={10} {...props}>
      {children}
    </Stack>
    /*
            </Theme>
          </MotionBox>
        )}
      </AnimatePresence>
    </ClientOnly>
*/
  );
}
