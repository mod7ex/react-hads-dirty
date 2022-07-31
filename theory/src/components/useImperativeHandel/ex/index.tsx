import "./index.scss";
import Modal, { CustomItem } from "./modal";
import { useRef } from "react";

export default function ExampleUseImperativeHandel() {
  const modalRef = useRef() as React.MutableRefObject<CustomItem>;

  return (
    <>
      <div id="actions">
        <button>Open</button>
        <button onClick={() => modalRef.current.focusClose()}>Focus Close</button>
        <button onClick={() => modalRef.current.focusYes()}>Focus Confirm</button>
        <button onClick={() => modalRef.current.focusNo()}>Focus Deny</button>
      </div>

      <Modal ref={modalRef} />
    </>
  );
}
