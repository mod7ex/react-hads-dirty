import { useRef, useEffect } from "react";

export default function useDebounce(cb: Function, dependencies: any[]) {
  const firstRenderRef = useRef<boolean | undefined>(undefined);

  useEffect(() => {
    console.log("rendered");
    if (firstRenderRef.current === undefined) {
      firstRenderRef.current = true;
      return;
    }

    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    return cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
