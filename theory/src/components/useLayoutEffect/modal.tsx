import { useState, useEffect, useLayoutEffect, useRef } from "react";

export default function UseLayout() {
  const [show, setShow] = useState(false);

  const popup = useRef() as React.MutableRefObject<HTMLDivElement>;
  const btn = useRef() as React.MutableRefObject<HTMLButtonElement>;
  /*
  useEffect(() => {
    // these lines of code will run asynchronously
    if (popup.current == null || btn.current == null) return;

    const { bottom } = btn.current.getBoundingClientRect(); // measurement from the DOM

    popup.current.style.top = `${bottom + 25}px`;
  });
  */

  useLayoutEffect(() => {
    // these lines of code will run asynchronously
    if (popup.current == null || btn.current == null) return;

    const { bottom } = btn.current.getBoundingClientRect(); // measurement from the DOM

    popup.current.style.top = `${bottom + 25}px`;
  });

  return (
    <>
      <button ref={btn} onClick={() => setShow((v) => !v)}>
        Click here
      </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          this is a popup
        </div>
      )}
    </>
  );
}
