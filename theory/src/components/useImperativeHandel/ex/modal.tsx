import React, { forwardRef, useImperativeHandle, useRef } from "react";
import "./index.scss";

type BtnRef = React.MutableRefObject<HTMLButtonElement>;

export type CustomItem = {
  focusClose: () => void;
  focusNo: () => void;
  focusYes: () => void;
};

function Modal(_: any, ref: React.Ref<CustomItem>) {
  const closeRef = useRef() as BtnRef;
  const noRef = useRef() as BtnRef;
  const yesRef = useRef() as BtnRef;

  useImperativeHandle(
    ref,
    () => {
      return {
        focusClose: () => {
          closeRef.current.focus();
        },
        focusNo: () => {
          noRef.current.focus();
        },
        focusYes: () => {
          yesRef.current.focus();
        },
      };
    },
    []
  );

  return (
    <div id="modal">
      <button ref={closeRef}>x</button>

      <h1>Title</h1>

      <p>do you confirm</p>

      <div className="actions">
        <button ref={yesRef} className="yes">
          Yes
        </button>
        <button ref={noRef} className="no">
          No
        </button>
      </div>
    </div>
  );
}

export default forwardRef(Modal);
