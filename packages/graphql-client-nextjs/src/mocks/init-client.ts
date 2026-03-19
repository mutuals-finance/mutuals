import { isBrowser } from "../utils";

export let initClientMocksPromise: Promise<boolean>;

if (isBrowser) {
  if (!window.__MSW_CLIENT_PROMISE__) {
    window.__MSW_CLIENT_PROMISE__ = import("./client").then(
      async ({ worker }) => {
        await worker.start({ onUnhandledRequest: "bypass" });
        return true;
      }
    );
  }
  initClientMocksPromise = window.__MSW_CLIENT_PROMISE__;
} else {
  initClientMocksPromise = Promise.resolve(true);
}

declare global {
  interface Window {
    __MSW_CLIENT_PROMISE__: Promise<boolean> | undefined;
  }
}
