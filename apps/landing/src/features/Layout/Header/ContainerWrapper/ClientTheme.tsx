import { ClientOnly, Theme, ThemeProps } from "@mutuals/ui";

export default function HeaderContainerWrapperClientTheme({
  children,
  ...props
}: ThemeProps) {
  return (
    <ClientOnly>
      <Theme {...props}>{children}</Theme>
    </ClientOnly>
  );
}
