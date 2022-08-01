import useLocalStorage from "../hooks/useLocalStorage";
import useUpdateLogger from "../hooks/useUpdateLogger";
import useToggle from "../hooks/useToggle";
import useTimeout from "../hooks/useTimeout";
import { useState } from "react";
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

export default function UseToggle() {
  const [isSomething, toggleIsSomething] = useToggle();
  const [count, setCount] = useState(0);
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
