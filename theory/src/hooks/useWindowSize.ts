import { useState } from "react";
import useEventListener from "./useEventListener";

export default function useWindowSize() {
  const [state, setState] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEventListener("resize", () => {
    setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  return state;
}
