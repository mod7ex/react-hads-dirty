import React, { useState, useRef, useEffect } from "react";

export default function UseRefComp() {
  const [name, setName] = useState("");

  const refHolder = useRef<any>(null);

  //   useEffect(() => {
  //     refHolder.current = refHolder.current + 1;
  //   });

  return (
    <>
      <input ref={refHolder} type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      <button onClick={() => refHolder.current?.focus()}>click</button>
    </>
  );
}
