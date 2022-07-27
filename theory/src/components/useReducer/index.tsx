import { useReducer } from "react";

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
