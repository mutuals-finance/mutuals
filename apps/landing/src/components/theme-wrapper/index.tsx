import { Theme, type ThemeProps } from "@mutuals/ui";
import HeaderObserverChange from "@/providers/HeaderObserver/change";

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
