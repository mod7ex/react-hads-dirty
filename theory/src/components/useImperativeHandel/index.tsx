import React, { useState, useRef } from "react";
import CustomInput, { CustomItem } from "./customInput";

export default function UseImperativeHandel() {
  const [value, setValue] = useState("red");
  const inputRef = useRef() as React.MutableRefObject<CustomItem>;

  return (
    <>
      <CustomInput ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />

      <br />

      <button onClick={() => inputRef.current.alertHi()}>Focus</button>
    </>
  );
}
