import {
  type UIProviderProps as MutualsUIProviderProps,
  UIProvider as MutualsUIProvider,
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
