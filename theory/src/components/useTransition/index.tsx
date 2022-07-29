import React, { useState, useTransition } from "react";

const LIST_SIZE = 10000;

export default function UseTransition() {
  const [isPending, startTransition] = useTransition();

  const [input, setInput] = useState("");

  const [list, setList] = useState<string[]>([]);

  /* 
  // here render will be only once
  function handelChange(e: React.ChangeEvent<HTMLInputElement>) {
    // inside the handler there is a logic that is computational and takes time
    const v = e.target.value;
    setInput(v);
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(v);
    }
    setList(l);
  }
  */

  // here render will be only twice
  function handelChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value;
    setInput(v); // high priority code

    startTransition(() => {
      // low priority code (will run in the background)
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(v);
      }
      setList(l);
    });
  }

  console.log("render");

  return (
    <>
      <input type="text" value={input} onChange={handelChange} />
      {isPending
        ? "Loading..."
        : list.map((item, i) => {
            return <div key={i}>{item}</div>;
          })}
    </>
  );
}
