import { useState } from "react";
import { isFunction } from "~/utils/types";

/**
 * the initial value is set to false
 * @param initlaState
 * @returns
 */
export default function useToggle(initlaState: ValueOrGenerator<boolean> = false) {
    const [state, setState] = useState(initlaState);

    const toggle = (value?: ValueOrConcluder<boolean>) => {
        setState((v) => (isFunction(value) ? value(v) : value ?? !v));
    };

    return [state, toggle] as const;
}
