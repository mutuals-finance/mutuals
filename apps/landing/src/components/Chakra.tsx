import {
  ChakraProvider,
  ColorModeScript,
  cookieStorageManager,
} from "@splitfi/ui";

import customTheme from "@/styles/theme";

interface ChakraProps {
  children: React.ReactNode;
}

export default function Chakra({ children }: ChakraProps) {
  return (
    <>
      <ColorModeScript
        initialColorMode={customTheme.config?.initialColorMode}
        type="cookie"
      />
      <ChakraProvider
        colorModeManager={cookieStorageManager}
        theme={customTheme}
      >
        {children}
      </ChakraProvider>
    </>
  );
}