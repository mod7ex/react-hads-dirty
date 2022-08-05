import { useRef } from "react";

// make sure this works also for objects (not only primitives)

export default function usePrevious<T>(value: T) {
  const currentRef = useRef(value);
  const previousRef = useRef<T | null>(null);

  if (currentRef.current !== value) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }

  return previousRef.current;
}
