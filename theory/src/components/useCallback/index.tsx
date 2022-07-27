import { useState, useCallback } from "react";
import List from "./List";

/**
 *
 * useCallback and useMemo are almost the same they have same signature
 *
 * ----> useMemo returns the return of the passed in function
 * ----> useCallback returns the function passed in bind into the new state (state that depends on)
 */

export default function UseCallback() {
  const [num, setNum] = useState(1);
  const [dark, setDark] = useState(false);

  // caches this call back and don't re-calculate it except if the num changed
  const getItems = useCallback(
    (inc: number = 1) => {
      return [num, num + inc, num + inc * 2];
    },
    [num]
  );

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <div style={theme}>
        <input type="number" value={num} onChange={(e) => setNum(Number.parseInt(e.target.value))} />

        <button onClick={() => setDark((v) => !v)}>toggle theme</button>

        <List getItems={getItems} />
      </div>
    </>
  );
}
