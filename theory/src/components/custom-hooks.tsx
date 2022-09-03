// import useLocalStorage from "../hooks/useLocalStorage";
// import useUpdateLogger from "../hooks/useUpdateLogger";
// import useToggle from "../hooks/useToggle";
// import useTimeout from "../hooks/useTimeout";
// import useDebounce from "../hooks/useDebounce";
// import useUpdateEffect from "../hooks/useUpdateEffect";
// import useArray from "../hooks/useArray";
// import usePrevious from "../hooks/usePrevious";
// import useStateWithHistory from "../hooks/useStateWithHistory";
// import { useSessionStorage, useLocalStorage } from "../hooks/useStorage";
// import useAsync from "../hooks/useAsync";
// import useFetch from "../hooks/useFetch";
// import useScript from "../hooks/useScript";
// import useDeepCompareEffect from "../hooks/useDeepCompareEffect";
// import useEventListener from "../hooks/useEventListener";
// import useIntersectionObserver from "../hooks/useIntersectionObserver";
// import useWindowSize from "../hooks/useWindowSize";
// import useMediaQuery from "../hooks/useMediaQuery";
// import useGeoLocation from "../hooks/useGeoLocation";
// import useStateWithValidation from "../hooks/useStateWithValidation";
// import useSize from "../hooks/useSize";
// import useEffectOnce from "../hooks/useEffectOnce";
// import useClickOutside from "../hooks/useClickOutside";
// import useDarkMode from "../hooks/useDarkMode";
// import useCopyToClipBoard from "../hooks/useCopyToClipBoard";
// import useCookie from "../hooks/useCookie";
import useTranslate from "../hooks/useTranslate";
// import useOnlineStatus from "../hooks/useOnlineStatus";
// import useRenderCount from "../hooks/useRenderCount";
// import useRenderCount from "../hooks/useRenderCount";
// import useDebugInfo from "../hooks/useDebugInfo";
// import useHover from "../hooks/useHover";
// import { MutableRefObject, useRef } from "react";
// import useLongPress from "../hooks/useLongPress";

/*

export default function CustomHook_0() {
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

export default function CustomHook_1() {
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
export default function CustomHook_2() {
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

export default function CustomHook_3() {
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

export default function CustomHook_4() {
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
export default function CustomHook_5() {
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

/*

export default function CustomHook_6() {
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

*/

/*

export default function CustomHook_7() {
  const [name, setName, removeName] = useSessionStorage("name", "EL CADI");
  const [age, setAge, removeAge] = useLocalStorage("age", 24);

  return (
    <>
      <h2>
        {name} - {age}
      </h2>

      <button onClick={() => setName("Modex987")}>Set name</button>
      <button onClick={() => setAge(18)}>Set age</button>
      <button onClick={removeName}>Remove name</button>
      <button onClick={removeAge}>Remove age</button>
    </>
  );
}

*/

/*

export default function CustomHook_8() {
  const [count, setCount] = useState(0);

  const { loading, error, value } = useAsync<string>(() => {
    return new Promise((resolve, reject) => {
      const success = Math.random() * 10 < 5;
      setTimeout(() => {
        success ? resolve("Hi") : reject("Error");
      }, 2000);
    });
  }, [count]);

  return (
    <>
      <div>Loading: {loading.toString()}</div>
      <div>value: {value}</div>
      <div>error: {error}</div>
      <br />
      <h3>count: {count}</h3>
      <button onClick={() => setCount((v) => v + 1)}>increment</button>
    </>
  );
}

*/

/*
export default function CustomHook_9() {
  const [id, setId] = useState(1);
  const { loading, error, value } = useFetch<object>(`https://jsonplaceholder.typicode.com/todos/${id}`, {}, [id]);

  return (
    <>
      <div>id: {id}</div>
      <button onClick={() => setId((c) => c + 1)}>increment Id</button>
      <div>Loading: {loading.toString()}</div>
      <div>Error: {JSON.stringify(error, null, 2)}</div>
      <div>Value: {JSON.stringify(value, null, 2)}</div>
    </>
  );
}
*/

/*

export default function CustomHook_10() {
  const { loading, error } = useScript(`https://code.jquery.com/jquery-3.6.0.min.js`);

  if (loading) return <div>loading ...</div>;
  if (error) return <div>Error ...</div>;
  return <div>{window.$(window).width()}</div>;
}

*/

/*

export default function CustomHook_11() {
  const [age, setAge] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const useEffectCountRef = useRef() as MutableRefObject<HTMLSpanElement>;
  const useDeepCompareEffectCountRef = useRef() as MutableRefObject<HTMLSpanElement>;

  // const person = useMemo(() => ({ age, name: "Mourad" }), [age]);
  const person = { age, name: "Mourad" };

  useEffect(() => {
    useEffectCountRef.current.textContent = `${parseInt(useEffectCountRef.current.textContent!) + 1}`;
  }, [person]);

  useDeepCompareEffect(() => {
    useDeepCompareEffectCountRef.current.textContent = `${parseInt(useDeepCompareEffectCountRef.current.textContent!) + 1}`;
  }, [person]);

  return (
    <>
      <div>
        useEffect: <span ref={useEffectCountRef}>0</span>
      </div>
      <div>
        useDeepCompareEffect: <span ref={useDeepCompareEffectCountRef}>0</span>
      </div>
      <div> Other Count: {otherCount} </div>
      <div> Person: {JSON.stringify(person)} </div>
      <button onClick={() => setAge((v) => v + 1)}> Increment Age </button>
      <button onClick={() => setOtherCount((v) => v + 1)}> Increment Other Count </button>
    </>
  );
}

*/

/*
export default function CustomHook_12() {
  const [key, setKey] = useState("");

  useEventListener("keyup", function (e) {
    setKey(e.key);
  });

  return <div> Last key: {key} </div>;
}
*/

/*

// https://reactjs.org/docs/handling-events.html

export default class Toggle extends React.Component {
  public state: { isToggleOn: boolean };

  constructor(props: any) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this); // <<------- this line is so important
  }

  handleClick() {
    this.setState((prevState: { isToggleOn: boolean }) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.isToggleOn ? "ON" : "OFF"}</button>;
  }
}

*/

/*

export default function CustomHook_13() {
  const headerTowRef = useRef() as MutableRefObject<HTMLHeadingElement>;

  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const visible = useIntersectionObserver(headerTowRef, "-200px", containerRef);

  return (
    <div ref={containerRef} style={{ height: "100vh", overflowY: "scroll" }}>
      <h1>header</h1>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus
        suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem
        quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate
        blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis
        sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque
        laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit
        reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit
        ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam
        non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis
        architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis
        sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque
        laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit
        reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit
        ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam
        non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis
        architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis
        sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque
        laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit
        reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit
        ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam
        non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis
        architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis
        sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque
        laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit
        reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit
        ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam
        non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis
        architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis
        sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque
        laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit
        reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit
        ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam
        non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis
        architecto saepe!
      </div>

      <h1 ref={headerTowRef}>header 2 {visible && "(visible)"} </h1>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus
        suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem
        quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate
        blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis
        sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque
        laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit
        reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit
        ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam
        non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis
        architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis
        sint, necessitatibus suscipit ipsam facere itaque laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, est? Veritatis sint, necessitatibus suscipit ipsam facere itaque
        laborum adipisci magnam rem quisquam non dolorem, sit reiciendis voluptate blanditiis architecto saepe!
      </div>
    </div>
  );
}

*/

/*
export default function CustomHook_14() {
  const size = useWindowSize();

  return (
    <div>
      {size.width} x {size.height}
    </div>
  );
}
*/

/*

export default function CustomHook_14() {
  const isLarge = useMediaQuery("(min-width: 400px)");

  return (
    <>
      <h1>Is width larger than 400px: {isLarge.toString()} </h1>
    </>
  );
}

*/

/*

export default function CustomHook_15() {
  const {
    loading,
    error,
    data: { latitude, longitude },
  } = useGeoLocation({ enableHighAccuracy: true });

  return (
    <>
      <div>Loading {loading ? "TRUE" : "FALSE"} </div>
      <div>Error {error?.message} </div>
      <div>
        {latitude} x {longitude}
      </div>
    </>
  );
}

*/

/*
export default function CustomHook_16() {
  const [username, setUsername, isValide] = useStateWithValidation((v) => v.length > 5, "");

  return (
    <>
      <div> valid: {isValide.toString()} </div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    </>
  );
}

*/

/*

export default function CustomHook_17() {
  const ref = useRef() as MutableRefObject<HTMLTextAreaElement>;

  const size = useSize(ref);

  return (
    <>
      <h2 style={{ marginBottom: "2em" }}> {JSON.stringify(size)} </h2>

      <textarea ref={ref}></textarea>
    </>
  );
}

*/

/*

export default function CustomHook_18() {
  const [count, setCount] = useState(0);

  useEffectOnce(() => alert("Hi"));

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}> Increment </button>
    </>
  );
}

*/

/*

export default function CustomHook_19() {
  const [open, setOpen] = useState(true);

  const modalRef = useRef() as MutableRefObject<HTMLDivElement>;

  useClickOutside(modalRef, (e) => {
    if ((e.target as HTMLElement).tagName === "BUTTON") return; // for ex

    if (open) setOpen(false);
  });

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>

      <div
        ref={modalRef}
        style={{
          display: open ? "block" : "none",
          backgroundColor: "blue",
          color: "white",
          width: "300px",
          height: "200px",
          position: "absolute",
          top: "calc(50% - 50px)",
          left: "calc(50% - 50px)",
        }}
      >
        <span>Modal</span>
      </div>
    </>
  );
}

*/

/*

export default function CustomHook_20() {
  const [mode, setMode] = useDarkMode();

  return (
    <>
      <button
        onClick={() => setMode((v) => !v)}
        style={{
          border: `1px solid ${mode ? "white" : "black"}`,
          background: "none",
          color: mode ? "white" : "black",
        }}
      >
        Toggle dark mode
      </button>
    </>
  );
}

*/

/*

export default function CustomHook_21() {
  const [copyToClipBoard, { success }] = useCopyToClipBoard();

  return (
    <>
      <h1>12345</h1>
      <button onClick={() => copyToClipBoard("Mourad EL CADI copied text")}> {success ? "Copied" : "Copy to clipboard"} </button>
      <input type="text" />
    </>
  );
}

*/

/*

export default function CustomHook_22() {
  const [value, update, remove] = useCookie("my_name", "Mourad");

  return (
    <>
      <div>{value}</div>
      <button onClick={() => update("EL CADI")}> change name to EL CADI </button>
      <button onClick={remove}>delete name</button>
    </>
  );
}

*/

export default function CustomHook_23() {
  const { language, fallbackLanguage, setLanguage, setFallbackLanguage, t, SUPPORTED_LANGS, _$ } = useTranslate();

  return (
    <>
      <div>language: {language}</div>
      <div>fallback language: {fallbackLanguage}</div>

      <hr />

      <fieldset>
        <legend>functional translation</legend>
        <div>
          <div>{t("hi")}</div>
          <div>{t("bye")}</div>
          <div>car: {t("car")}</div>
          <div> {t("nested.value")}</div>
        </div>

        {/* @ts-ignore */}
        <div>not existing key: {t("fffffffffff")}</div>
      </fieldset>

      <hr />

      <fieldset>
        <legend>object translation</legend>
        <div>
          <div>{_$.hi}</div>
          <div>{_$.bye}</div>
          <div>car: {_$.car}</div>
          <div> {_$.nested?.value}</div>
        </div>

        {/* @ts-ignore */}
        <div>not existing key: {_$.fffffffffff}</div>
      </fieldset>

      <hr />

      <button onClick={() => setLanguage(SUPPORTED_LANGS.FRENCH)}> Change to french </button>

      <button onClick={() => setLanguage(SUPPORTED_LANGS.ENGLISH)}> Change to english </button>

      <button onClick={() => setFallbackLanguage(SUPPORTED_LANGS.ENGLISH)}> set fallback to english </button>

      <button onClick={() => setFallbackLanguage(SUPPORTED_LANGS.FRENCH)}> set fallback to french </button>
    </>
  );
}

/*

export default function CustomHook_24() {
  const online = useOnlineStatus();

  return (
    <>
      {" "}
      <h2>{online ? "Online" : "Offline"}</h2>{" "}
    </>
  );
}

*/

/*

export default function CustomHook_25() {
  const [is, toggle] = useToggle(false);

  const renderCount = useRenderCount();

  return (
    <>
      <div>{is.toString()}</div>
      <div>{renderCount}</div>
      <button onClick={toggle}>toggle</button>
    </>
  );
}

*/

/*
function CustomHook_26({ bool, count }: Record<string, any>) {
  const info = useDebugInfo<{ bool: boolean; count: number }>("CustomHook_26", { bool, count });

  return (
    <>
      <div> {bool.toString()} </div>
      <div> {count} </div>
      <div> {JSON.stringify(info, null, 2)} </div>
    </>
  );
}

export default function DebugInfoComponent() {
  const [bool, toggle] = useToggle(false);
  const [count, setCount] = useState(0);

  return (
    <>
      <CustomHook_26 bool={bool} count={count} />
      <button onClick={toggle}>toggle</button>
      <button onClick={() => setCount((v) => v + 1)}>increment</button>
    </>
  );
}

*/

/*

export default function CustomHook_27() {
  const elementRef = useRef() as MutableRefObject<HTMLDivElement>;

  const hovered = useHover(elementRef);

  return (
    <>
      <div
        ref={elementRef}
        style={{
          backgroundColor: hovered ? "blue" : "red",
          width: "100px",
          height: "100px",
          position: "absolute",
          top: "cal(50% - 50px)",
          left: "cal(50% - 50px)",
        }}
      ></div>
    </>
  );
}

*/

/*
export default function CustomHook_27() {
  const elementRef = useRef() as MutableRefObject<HTMLDivElement>;

  useLongPress(elementRef, () => alert("long pressed"));

  return (
    <>
      <div
        ref={elementRef}
        style={{
          backgroundColor: "blue",
          width: "100px",
          height: "100px",
          position: "absolute",
          top: "cal(50% - 50px)",
          left: "cal(50% - 50px)",
        }}
      ></div>
    </>
  );
}

*/
