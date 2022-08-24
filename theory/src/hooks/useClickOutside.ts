import { RefObject, useRef } from "react";
import useEventListener from "./useEventListener";

export default function useClickOutside<T extends HTMLElement>(ref: RefObject<T>, cb: (e: MouseEvent) => void) {
  useEventListener(
    "click",
    (e) => {
      // check if the click target exists and if it's not null
      if (ref.current == null || ref.current.contains(e.target as Node | null)) return;

      cb(e);
    },
    useRef(document)
  );
}
