import { useCallback, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useUpdateLogger from "../hooks/useUpdateLogger";
import useToggle from "../hooks/useToggle";
import useTimeout from "../hooks/useTimeout";
import useDebounce from "../hooks/useDebounce";
import useUpdateEffect from "../hooks/useUpdateEffect";
import useArray from "../hooks/useArray";
import usePrevious from "../hooks/usePrevious";
import useStateWithHistory from "../hooks/useStateWithHistory";

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

/*

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

*/

/*

export default function CustomHooks_4() {
  const { array, set, push, remove, filter, update, clear } = useArray([1, 2, 3, 4, 5, 6]);

  return (
    <>
      <div>{array.join(", ")}</div>
      <br />
      <button onClick={() => set([1, 2])}> set to 1, 2 </button>
      <br />
      <button onClick={() => push(7)}> push 7 </button>
      <br />
      <button onClick={() => remove(1)}> remove second element </button>
      <br />
      <button onClick={() => filter((v: number) => v < 5)}> keep number less than 4 </button>
      <br />
      <button onClick={() => update(1, 9)}> change second element to 9 </button>
      <br />
      <button onClick={() => clear()}> clear </button>
    </>
  );
}

*/

/*
export default function CustomHooks_5() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Mourad");
  const previousCount = usePrevious(count);

  return (
    <>
      <div>
        {count} - {previousCount}
      </div>
      <div>{name} </div>
      <button onClick={() => setCount((v) => v + 1)}>Increment</button>
      <button onClick={() => setName("EL CADI")}>change name</button>
    </>
  );
}

*/

export default function CustomHooks_6() {
  const [count, setCount, { history, pointer, back, forward, go }] = useStateWithHistory(1);
  const [name, setName] = useState("Mourad");

  return (
    <>
      <div>{count}</div>
      <div> {history.join(", ")} </div>
      <div>pointer {pointer}</div>
      <div>{name}</div>
      <button onClick={() => setCount((v: number) => v * 2)}>double</button>
      <button onClick={() => setCount((v: number) => v + 1)}>increment</button>
      <button onClick={back}>back</button>
      <button onClick={forward}>forward</button>
      <button onClick={() => go(2)}>Go To Index 2</button>
      <button onClick={() => setName("EL CADI")}>change name</button>
    </>
  );
}
