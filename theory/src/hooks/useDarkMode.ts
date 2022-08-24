import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import useMediaQuery from "./useMediaQuery";

export default function useDarkMode() {
  /**
   *
   * It would be better to use Context for this
   *
   */

  const [darkMode, setDarkMode] = useLocalStorage<boolean>("use-dark-mode", false);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const enabled = darkMode || prefersDarkMode;

  useEffect(() => {
    console.log(darkMode);

    document.body.classList.toggle("dark-mode", enabled);
  }, [enabled]);

  return [enabled, setDarkMode] as const;
}
