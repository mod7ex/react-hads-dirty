import { RefObject, useLayoutEffect, useState } from "react";

export default function useSize<T extends HTMLElement>(ref: RefObject<T>) {
  const [size, setSize] = useState<DOMRectReadOnly>();

  useLayoutEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => setSize(entry.contentRect));

    observer.observe(ref.current);

    return () => observer.disconnect();
  });

  return size;
}
