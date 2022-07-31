import { useState, useEffect, useLayoutEffect } from "react";

export default function UseLayout() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log(count);
  // }, [count]);

  useLayoutEffect(() => {
    // useLayoutEffect happens synchronously with rendering
    console.log(count);
  }, [count]);

  return (
    <>
      <button onClick={() => setCount((v) => v + 1)}>Increment</button>
      <div>{count}</div>
    </>
  );
}
