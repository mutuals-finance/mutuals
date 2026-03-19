import type { MutualsClient } from "@mutuals/sdk";
import type { MutualsReactSdkContext } from "./context";

export const getMutualsClient = (
  context: MutualsReactSdkContext | undefined
): MutualsClient => {
  if (context === undefined) {
    throw new Error("Make sure to include <MutualsProvider>");
  }
  if (context.mutualsClient === undefined) {
    throw new Error(
      "Make sure to initialize your config with useMutualsClient"
    );
  }

  return context.mutualsClient;
};
