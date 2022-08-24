import { useCallback, useState } from "react";
import { Cookies, COOKIE_OPTIONS } from "../utils";

export default function useCookie(name: string, defaultValue: string) {
  const [value, setValue] = useState<undefined | string>(() => {
    const cookie = Cookies.get(name);
    if (cookie) return cookie;
    Cookies.set(name, defaultValue);
    return defaultValue;
  });

  const update = useCallback(
    (newVal: string, options?: COOKIE_OPTIONS) => {
      Cookies.set(name, newVal, options);
      setValue(newVal);
    },
    [name]
  );

  const erase = useCallback(() => {
    Cookies.erase(name);
    setValue(undefined);
  }, [name]);

  return [value, update, erase] as const;
}
