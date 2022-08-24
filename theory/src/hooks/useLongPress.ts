import { RefObject } from "react";
import useEffectOnce from "./useEffectOnce";
import useEventListener from "./useEventListener";
import useTimeout from "./useTimeout";

export default function useLongPress<T extends HTMLElement>(el: RefObject<T>, cb: (el: HTMLElement) => void, { delay = 1000 } = {}) {
  const { reset, clear } = useTimeout(cb, delay); // this will run by default
  useEffectOnce(clear); // so we clear it directly so that <cb> doesn't run

  // events for mouse and screen devices
  useEventListener("mousedown", reset, el);
  useEventListener("touchstart", reset, el);

  useEventListener("mouseup", clear, el);
  useEventListener("mouseleave", clear, el);
  useEventListener("touchend", clear, el);
}
