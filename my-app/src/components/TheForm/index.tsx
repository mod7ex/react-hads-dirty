import React, { useRef } from "react";
import "./styles.scss";

const TheForm: React.FC<FormProps> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const wrrapedHandleAdd = (e: FunctionArgs<FormProps["handleAdd"]>[0]) => {
    handleAdd(e);
    if (e.type === "keyup" && (e as React.KeyboardEvent).key === "Enter") inputRef.current?.blur();
  };

  return (
    <div className="app-form">
      <div className="form-container">
        <h1>Taskify</h1>
        <div className="form-input">
          <input ref={inputRef} type="text" placeholder="Enter a task" value={todo} onChange={(e) => setTodo(e.target.value)} onKeyUp={wrrapedHandleAdd} />
          <button onClick={handleAdd}>GO</button>
        </div>
      </div>
    </div>
  );
};

export default TheForm;
