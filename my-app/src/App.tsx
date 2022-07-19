import React from "react";
import { useState } from "react";
import ATodo from "./components/Todo";
import TheForm from "./components/TheForm";

function App() {
  const [todo, setTodo] = useState<TodoType>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd: FormProps["handleAdd"] = (e) => {
    if (e.type === "click" || (e.type === "keyup" && (e as React.KeyboardEvent).key === "Enter")) {
      setTodos([...todos, { id: Date.now().toString(), content: todo }]);
      setTodo("");
    }
  };

  const handelCheck = (id: Todo["id"]) => {
    setTodos(todos.map((item) => (item.id === id ? { ...item, is_done: !item.is_done } : item)));
  };

  const handelDrop = (_id: Todo["id"]) => {
    setTodos(todos.filter(({ id }) => id !== _id));
  };

  const handelUpdate = (_id: Todo["id"], content: Todo["content"]) => {
    setTodos(todos.map((item) => (item.id === _id ? { ...item, content } : item)));
  };

  return (
    <div className="app">
      <TheForm todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <div className="todos-list">
        {todos.map(({ content, id, is_done }) => (
          <ATodo content={content} is_done={is_done} id={id} onCheck={handelCheck} onDrop={handelDrop} key={id} onUpdate={handelUpdate} />
        ))}
      </div>
    </div>
  );
}

export default App;
