import { useEffect, useState, useCallback } from "react";

type Vog<T> = T | (() => T); // Value Or Generator

export function useLocalStorage<T>(key: string, defaultValue: Vog<T>) {
  return useStorage(key, defaultValue, window.localStorage);
}

export function useSessionStorage<T>(key: string, defaultValue: Vog<T>) {
  return useStorage(key, defaultValue, window.sessionStorage);
}

function useStorage<T>(key: string, defaultValue: T | (() => T), storageObject: Storage) {
  const [value, setValue] = useState<T | undefined>(() => {
    const jsonValue = storageObject.getItem(key);

    if (jsonValue != null) return JSON.parse(jsonValue) as T;

    return defaultValue instanceof Function ? defaultValue() : defaultValue;
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);

    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove] as const;
}
