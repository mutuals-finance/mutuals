import { isServer } from "../utils";

export async function initServerMocks() {
  if (isServer) {
    const { server } = await import("./server");
    const { handlers } = await import("./handlers");

    server.resetHandlers(...handlers);

    if (globalThis.__MSW_SERVER__) {
      globalThis.__MSW_SERVER__.close();
    }

    server.listen({ onUnhandledRequest: "bypass" });
    globalThis.__MSW_SERVER__ = server;
  }
}

declare global {
  var __MSW_SERVER__: typeof import("./server").server | undefined;
}
