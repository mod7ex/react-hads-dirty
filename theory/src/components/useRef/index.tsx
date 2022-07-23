import React, { useState, useRef, useEffect } from "react";

/**
 *  Using state will cause the component to re-render
 *  Using Ref will not cause the component to re-render
 *
 *  renderCount if implimented using useState it will cause an infinite loop
 */

export default function UseRefComp() {
  const [name, setName] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);
  const renderCount = useRef<number>(0);
  const previousName = useRef<string>("");

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  useEffect(() => {
    previousName.current = name;
  }, [name]);

  const focus = () => {
    inputRef.current?.focus();
    if (inputRef.current) inputRef.current.value = "Hello";
  };

  return (
    <>
      <input ref={(el) => (inputRef.current = el)} type="text" value={name} onChange={(e) => setName(e.target.value)} />
      {/* <input ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value)} /> */}

      <div>
        My name is {name}, just a moment ago it was '{previousName.current}'
      </div>

      <div>Rendered {renderCount.current}</div>

      <button onClick={focus}>click</button>
    </>
  );
}
