import { Theme, ThemeProps } from "@mutuals/ui";
import HeaderObserverChange from "@/providers/HeaderObserver/Change";

type ThemeWrapperProps = ThemeProps;

export default function ThemeWrapper({
  children,
  appearance = "dark",
  ...props
}: ThemeWrapperProps) {
  return (
    <Theme appearance={appearance} {...props}>
      <HeaderObserverChange theme={appearance}>{children}</HeaderObserverChange>
    </Theme>
  );
}
