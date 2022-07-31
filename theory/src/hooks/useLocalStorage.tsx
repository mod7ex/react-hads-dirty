import { useState, useDeferredValue, useEffect } from "react";

type InitialValue<T> = T | (() => T);

function getStoredValue<T extends string>(key: string, initialValue: InitialValue<T>) {
  const savedValue = localStorage.getItem(key);
  if (savedValue) return savedValue as T;
  return initialValue instanceof Function ? initialValue() : initialValue;
}

export default function useLocalStorage<T extends string>(key: string, _default_value: InitialValue<T>) {
  const [value, setValue] = useState(() => getStoredValue(key, _default_value));

  const deferredValue = useDeferredValue(value); // just suggar-code we could have used debounce

  useEffect(() => {
    if (deferredValue) localStorage.setItem(key, deferredValue);
    console.log("saved");
  }, [deferredValue]);

  return [value, setValue] as const;
}
