import { useState } from "react";

export default function useArray<T>(initial: T[]) {
  const [arr, setArr] = useState(initial);

  function push(item: T) {
    setArr((a) => [...a, item]);
  }

  function filter(cb: (v: T, i: number, array: T[]) => boolean) {
    setArr((a) => a.filter(cb));
  }

  // type of index should be 1, ..., arr.length
  function update(index: number, v: T) {
    setArr((a) => [...a.slice(0, index), v, ...a.slice(index + 1, a.length)]);
  }

  // type of index should be 1, ..., arr.length
  function remove(index: number) {
    setArr((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  }

  function clear() {
    setArr([]);
  }

  /**
   * we can go on
   */

  return { array: arr, set: setArr, push, filter, update, remove, clear };
}
