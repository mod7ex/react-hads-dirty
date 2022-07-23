import { useState } from "react";

let init = () => {
  console.log("init function will run everytime the component renders");
  return 0;
};

export const Counter = () => {
  // const [value, setValue] = useState<number>(init()); // init function will run everytime the component renders
  const [value, setValue] = useState<number>(() => {
    console.log("init will run once");
    return 0;
  });

  const decrement = () => {
    // Here we will decrement by 2
    setValue((v) => v - 1);
    setValue((v) => v - 1);

    /*
    // Here we will decrement by 1
    setValue(value - 1);
    setValue(value - 1);
    */
  };

  const increment = () => {
    // Here we will increment by 2
    setValue((v) => v + 1);
    setValue((v) => v + 1);

    /*
    // Here we will decrement by 1
    setValue(value +1 1);
    setValue(value +1 1);
    */
  };

  return (
    <>
      <button onClick={() => decrement()}> - </button>
      <span> {value} </span>
      <button onClick={() => increment()}> + </button>
    </>
  );
};

export const ObjectCounter = () => {
  const [state, setState] = useState({ count: 0, theme: "blue" });

  const { count, theme } = state;

  const decrement = () => {
    setState((prev) => ({ ...prev, count: prev.count - 1 }));
  };

  const increment = () => {
    setState(({ count, theme }) => ({ theme, count: count + 1 }));
  };

  return (
    <>
      <span> Theme : {theme} </span>
      <button onClick={() => decrement()}> - </button>
      <span> {count} </span>
      <button onClick={() => increment()}> + </button>
    </>
  );
};
