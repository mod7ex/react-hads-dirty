import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";
import edit from "../../assets/svg/edit.svg";
import trash from "../../assets/svg/trash.svg";
import check from "../../assets/svg/check.svg";
import undo from "../../assets/svg/undo.svg";
import save from "../../assets/svg/save.svg";

type ATodoProps = Todo & { onCheck: (id: Todo["id"]) => void; onDrop: (id: Todo["id"]) => void; onUpdate: (id: Todo["id"], content: Todo["content"]) => void };

const ATodo = ({ content, id, is_done, onCheck, onDrop, onUpdate }: ATodoProps) => {
  const [editMode, setEditMode] = useState(false);

  const [editPayoad, setEditPayload] = useState(content);

  const editHandler = (bool: boolean = false) => {
    if (!editMode) setEditPayload(content);
    else if (bool) onUpdate(id, editPayoad); // save case
    setEditMode(!editMode); // switch anyway
  };

  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    console.log("up");
  }, [editMode]);

  return (
    <div className={`todo ${is_done ? "done" : ""}`}>
      <div className="todo-header">
        <p>created at</p>
        <div className="todo-actions">
          <button onClick={() => onDrop(id)}>
            <img src={trash} alt="" />
          </button>

          <button onClick={() => editHandler()}>
            <img src={editMode ? undo : edit} alt="" />
          </button>

          {editMode ? (
            <button onClick={() => editHandler(true)}>
              <img src={save} alt="" />
            </button>
          ) : (
            <button onClick={() => onCheck(id)}>
              <img src={check} alt="" />
            </button>
          )}
        </div>
      </div>
      <div className="todo-content">
        <p className="todo-body">{content}</p>
        {editMode ? <textarea value={editPayoad} onChange={(e) => setEditPayload(e.target.value)} ref={inputRef} /> : null}
      </div>
    </div>
  );
};

export default ATodo;
