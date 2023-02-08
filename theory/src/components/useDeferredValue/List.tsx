import { useMemo, useDeferredValue, useEffect } from "react";

const LIST_SIZE = 20000;

/**
 * it sounds like debounce, but here it's react who decides how long to wait
 */

function List({ input }: { input: string }) {
  // it sounds like a proxy that will deferre changes till it's time (few seconds...)
  // we use <useDeferredValue> hook in situations where input is comming from above and we don't have controll to state setter
  const deferredInput = useDeferredValue(input); 

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

export default List as unknown as React.Component;
