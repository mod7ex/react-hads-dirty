import { useCallback, useState } from "react";

export default function useStateWithValidation(validator: (v: string) => boolean, initValue: string) {
  /**
   * we can use an array of validators
   *
   * this hook can be used with debounce for better UX
   */

  const [state, setState] = useState(initValue);

  const [isValid, setIsValid] = useState(() => validator(state));

  const onChange = useCallback(
    (nextState: string | ((v: string) => string)) => {
      const _value = nextState instanceof Function ? nextState(state) : nextState;

      setState(_value);
      setIsValid(validator(_value));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [validator]
  );

  return [state, onChange, isValid] as const;
}
