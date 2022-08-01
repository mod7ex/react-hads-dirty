import { useState } from "react";

/**
 * the initial value is set to false
 * @param initlaState
 * @returns
 */
export default function useToggle(initlaState: boolean = false) {
  const [state, setState] = useState(initlaState);

  const toggle = (value?: any) => {
    let target = value instanceof Function ? value(state) : value;
    setState((v) => (typeof target === "boolean" ? value : !v));
  };

  return [state, toggle] as const;
}
