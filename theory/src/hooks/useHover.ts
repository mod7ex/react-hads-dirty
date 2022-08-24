import { RefObject, useState } from "react";
import useEventListener from "./useEventListener";

export default function useHover<T extends HTMLElement>(el: RefObject<T>) {
  const [state, setState] = useState(false);

  useEventListener("mouseover", () => setState(true), el);
  useEventListener("mouseout", () => setState(false), el);

  return state;
}
