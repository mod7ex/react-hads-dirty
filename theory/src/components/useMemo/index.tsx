import { useState, useMemo } from "react";

function slowFunction(num: number) {
  console.log("Calling Slow Function");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

export default function UseMemo() {
  const [num, setNum] = useState(0);

  const [dark, setDark] = useState(false);

  //   const doubleNUm = slowFunction(num); // this line runs on every render (on change theme or any state change or force re-render)
  const doubleNUm = useMemo(() => {
    return slowFunction(num);
  }, [num]); // now the slow function will run only on num change, changing theme won't be delayed

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <input type="number" value={num} onChange={(e) => setNum(Number.parseInt(e.target.value))} />
      <button onClick={() => setDark((v) => !v)}>change theme</button>
      <div style={themeStyles}> {doubleNUm} </div>
    </>
  );
}
