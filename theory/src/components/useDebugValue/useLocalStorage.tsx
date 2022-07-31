import { useCallback, useDebugValue, useEffect, useState } from "react";

export function useLocalStorage(key: string, defautltValue: string) {
  const [value, setValue] = useState(() => {
    const _defaultValue = localStorage.getItem(key) ?? defautltValue;
    localStorage.setItem(key, _defaultValue);
    return _defaultValue;
  });

  useDebugValue(["HELLO", value]); // this hook works only inside of custom hooks for debugging in react-DEV-TOOLS
  useDebugValue(key, (v) => getValueSlowly(v)); // this hook works only inside of custom hooks for debugging in react-DEV-TOOLS

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  const remove = useCallback(() => {
    localStorage.removeItem(key);
  }, [key]);

  return [value, setValue, remove] as const;
}

function getValueSlowly(value: unknown) {
  for (let i = 0; i < 3000000; i++) {}
  return `The key being used now is: ${value}`;
}
