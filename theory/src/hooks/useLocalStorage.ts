import { useState, useDeferredValue, useEffect } from "react";

function getStoredValue<T>(key: string, initialValue: ValueOrGenerator<T>) {
  const savedValue = localStorage.getItem(key);
  if (savedValue) return JSON.parse(savedValue) as T;
  // return initialValue instanceof Function ? initialValue() : initialValue;
  return (typeof initialValue === "function" ? initialValue() : initialValue) as T;
}

export default function useLocalStorage<T>(key: string, _default_value: ValueOrGenerator<T>) {
  const [value, setValue] = useState(() => getStoredValue(key, _default_value));

  const deferredValue = useDeferredValue(value); // just suggar-code we could have used debounce

  useEffect(() => {
    if (deferredValue == null) return;
    localStorage.setItem(key, JSON.stringify(deferredValue));
    console.log("saved in local storage");
  }, [deferredValue]);

  return [value, setValue] as const;
}
