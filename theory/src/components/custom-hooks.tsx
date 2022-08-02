import { useCallback, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useUpdateLogger from "../hooks/useUpdateLogger";
import useToggle from "../hooks/useToggle";
import useTimeout from "../hooks/useTimeout";
import useDebounce from "../hooks/useDebounce";
import useUpdateEffect from "../hooks/useUpdateEffect";

/*

export default function CustomHooks_0() {
  const [name, setName] = useLocalStorage<string>("my_name", "Mourad EL CADI");

  useUpdateLogger(name); // logging <name> variable changes

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <h1>{name}</h1>
    </>
  );
}

*/

/*

export default function CustomHooks_1() {
  const [isSomething, toggleIsSomething] = useToggle();

  const [count, setCount] = useState(0);

  // const { clear, reset } = useTimeout(useCallback(() => setCount((v) => v + 1)), 3000);
  // we use <useRef> to allow the function to stay the same --> no need for <useCallback>

  const { clear, reset } = useTimeout(() => setCount((v) => v + 1), 3000);

  return (
    <>
      <h1>useTimeout and useToggle</h1>
      <br />
      {isSomething ? "True" : "False"}
      <br />
      <button onClick={() => toggleIsSomething()}>toggle</button>
      <button onClick={() => toggleIsSomething(true)}>make true</button>
      <button onClick={() => toggleIsSomething(false)}>make false</button>
      <br />
      <p>toggle using a fuunction</p>
      <button onClick={() => toggleIsSomething((v: boolean) => !v)}>toggle</button>
      <button onClick={() => toggleIsSomething((v: boolean) => true)}>make true</button>
      <button onClick={() => toggleIsSomething((v: boolean) => false)}>make false</button>
      <br />
      <hr />
      Count: {count}
      <br />
      <button onClick={reset}>Reset</button>
      <button onClick={clear}>Clear</button>
    </>
  );
}

*/

/*
export default function CustomHooks_2() {
  const [count, setCount] = useState(10);

  useDebounce(() => alert(count), 3000, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((v) => v + 1)}>Increment</button>
    </div>
  );
}

*/

export default function CustomHooks_3() {
  const [count, setCount] = useState(0);

  useUpdateEffect(() => alert(count), [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((v) => v + 1)}>Increment</button>
    </div>
  );
}
