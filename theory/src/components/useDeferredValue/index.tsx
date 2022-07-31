import { useState } from "react";
import List from "./List";

export default function UseDeferredValue() {
  // const [] = useDeferredValue('')
  const [input, setInput] = useState("");

  function handelChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  return (
    <>
      <input type="text" value={input} onChange={handelChange} />
      {/* Commented just for bug */}
      {/* <List input={input} /> */}
    </>
  );
}
