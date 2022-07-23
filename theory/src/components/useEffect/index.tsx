import { useEffect, useState } from "react";

const API = "https://jsonplaceholder.typicode.com/";

export const UseEffect = () => {
  const [resourceType, setResourceTYpe] = useState<string>("posts");
  const [items, setItems] = useState<object[]>([]);

  /*
    console.log("runs on every render");

    useEffect(() => {
        console.log("runs on every render");
    });
*/

  useEffect(() => {
    console.log(resourceType, "runs on every resource change");

    fetch(`${API + resourceType}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setItems(json);
      });

    // clean Up
    return () => {
      console.log("Return from resource change");
    };
  }, [resourceType]);

  return (
    <>
      <button onClick={() => setResourceTYpe("posts")}> Posts </button>
      <button onClick={() => setResourceTYpe("users")}> Users </button>
      <button onClick={() => setResourceTYpe("comments")}> Comments </button>

      <h1>{resourceType}</h1>

      {items.map((item, i) => (
        <pre key={i}>{JSON.stringify(item)}</pre>
      ))}
    </>
  );
};

export const WindowResizer = () => {
  const [windowWidth, setWIndowWidth] = useState<number>(window.innerWidth);

  const handelResize = () => {
    setWIndowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handelResize);

    // clean Up
    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, []);

  return <div> {windowWidth} </div>;
};
