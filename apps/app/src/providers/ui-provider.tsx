import {
  UIProvider as MutualsUIProvider,
  type UIProviderProps as MutualsUIProviderProps,
  Toaster,
} from "@mutuals/ui";

export default function UIProvider({ children }: MutualsUIProviderProps) {
  return (
    <MutualsUIProvider>
      <Toaster />
      {children}
    </MutualsUIProvider>
  );
}
