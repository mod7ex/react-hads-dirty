import { useMemo, useDeferredValue, useEffect } from "react";

/**
 * it sounds like debounce, but here it's react who decides how long to wait
 */

export default function List({ input }: { input: string }) {
  const LIST_SIZE = 20000;

  const deferredInput = useDeferredValue(input); // it sounds like a proxy that will deferre changes till it's time (few seconds...)

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput + " " + i}</div>);
    }
    return l;
  }, [deferredInput]);

  useEffect(() => {
    console.log(`Input: ${input} --- deferredInput: ${deferredInput}`);
  }, [input, deferredInput]);

  return list;
}
