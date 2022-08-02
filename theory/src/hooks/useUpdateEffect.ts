import { useRef, useEffect } from "react";

export default function useDebounce(cb: Function, dependencies: any[]) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    return cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
