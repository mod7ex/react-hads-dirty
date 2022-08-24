import { useState, useEffect, useRef } from "react";
import useEventListener from "./useEventListener";

// export default function useMediaQuery<T extends "min" | "max">(mediaQuery: `(${T}-width: ${number}px)`) {
export default function useMediaQuery(mediaQuery: `(${string})`) {
  const [isMatch, setIsMatch] = useState(false);

  const mediaQueryListRef = useRef<MediaQueryList>(window.matchMedia(mediaQuery));

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);

    mediaQueryListRef.current = list;

    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener("change", (e) => setIsMatch(e.matches), mediaQueryListRef);

  return isMatch;
}
