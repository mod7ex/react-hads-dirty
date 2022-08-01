import { useCallback, useEffect, useRef } from "react";

export default function useToggle(cb: Function, delay: number) {
  const callbackRef = useRef(cb);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    callbackRef.current = cb;
  }, [cb]);

  const set = useCallback(() => {
    timerRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timerRef.current && clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [set, clear, delay]); // maybe we can omit delay (delay changes --> set changes)

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { clear, reset };
}
