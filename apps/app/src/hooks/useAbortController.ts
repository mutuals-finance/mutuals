import { MutableRefObject, useRef } from "react";

export type AbortFn = () => void;
export type UseAbortControllerResult = [
  AbortFn,
  { abortController: MutableRefObject<AbortController> },
];

export default function useAbortController(): UseAbortControllerResult {
  const abortController = useRef(new AbortController());

  const abort = () => {
    abortController.current.abort();
    abortController.current = new AbortController();
  };

  return [abort, { abortController }];
}
