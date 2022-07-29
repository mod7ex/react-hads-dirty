import React, { useReducer, useState } from "react";

/*

type StateType = { count: number };

enum ACTIONS {
  increment = "increment",
  decrement = "decrement",
}

const reducer = (state: StateType, action: ACTIONS) => {
  const count = state.count + (action === ACTIONS.increment ? 1 : -1);
  return { count };
};

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch(ACTIONS.increment);
  }

  function decrement() {
    dispatch(ACTIONS.decrement);
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

*/

// ***************************************************************************************

enum ACTIONS {
  ADD_TODO = "add_todo",
  DELETE_TODO = "delete_todo",
  TOGGLE_STATUS = "toggle_status",
}

type Todo = { id: string | number; name: string; done: boolean };
type ACTION = { type: ACTIONS; payload: Partial<Todo> };

const newTodo = (name: string) => {
  return { id: Date.now(), name, done: false };
};

const reducer = (state: Todo[], action: ACTION) => {
  if (action.type === ACTIONS.ADD_TODO) {
    return [...state, newTodo(action.payload.name!)];
  } else if (action.type === ACTIONS.TOGGLE_STATUS) {
    return state.map((item) => {
      if (item.id === action.payload.id) return { ...item, done: !item.done };
      return item;
    });
  }

  return state;
};

export default function UseReducer() {
  const [todos, dispatch] = useReducer(reducer, []);

  const [name, setName] = useState("");

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  };

  const handelToggle = (id: Todo["id"]) => {
    dispatch({ type: ACTIONS.TOGGLE_STATUS, payload: { id } });
  };

  console.log(todos);

  return (
    <>
      <form onSubmit={handelSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </form>
      <hr />

      {todos.map(({ id, name, done }) => (
        <div key={id}>
          <h1>{name}</h1>
          <h4>
            <button onClick={() => handelToggle(id)}>Toggle todo</button>
            <span>done : {done ? "TRUE" : "FALSE"}</span>
          </h4>
        </div>
      ))}
    </>
  );
}
