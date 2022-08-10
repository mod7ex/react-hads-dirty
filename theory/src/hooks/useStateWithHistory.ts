import { useCallback, useRef, useState } from "react";

export default function useStateWithHistory<T>(initialValue: T, { capacity = 10 } = {}) {
  /*
   * The best hook for <undo> <re-do>
   */

  const [value, setValue] = useState(initialValue);
  const historyRef = useRef([value]);
  const pointerRef = useRef(0);

  const set = useCallback(
    (v: T | ((x: T) => T)) => {
      const resolvedValue = v instanceof Function ? v(value) : v;

      if (historyRef.current[pointerRef.current] !== resolvedValue) {
        // if the value changed
        if (pointerRef.current < historyRef.current.length - 1) {
          // remove everything after the pointer (^-^)
          // the pointer might go back so everything after it will be cleared
          historyRef.current.splice(pointerRef.current + 1);
        }

        historyRef.current.push(resolvedValue);

        while (historyRef.current.length > capacity) {
          // allow only 10 items in history
          historyRef.current.shift();
        }

        pointerRef.current = historyRef.current.length - 1; // point to the end of the array

        setValue(resolvedValue);
      }
    },
    [capacity, value]
  );

  const back = useCallback(() => {
    if (pointerRef.current <= 0) return;
    pointerRef.current--;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const forward = useCallback(() => {
    if (pointerRef.current >= historyRef.current.length - 1) return;
    pointerRef.current++;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const go = useCallback((index: number) => {
    if (index < 0 || index >= historyRef.current.length - 1) return;
    pointerRef.current = index;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  return [value, set, { back, forward, go, pointer: pointerRef.current, history: historyRef.current }] as const;
}
