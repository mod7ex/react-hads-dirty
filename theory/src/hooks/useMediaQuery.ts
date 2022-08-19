import { useState, useEffect } from "react";
import useEventListener from "./useEventListener";

export default function useMediaQuery(mediaQuery: string) {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList | undefined>(undefined);

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);

    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener(
    "change",
    function (e) {
      setIsMatch(this.mathces);
    },
    mediaQueryList
  );

  return isMatch;
}
