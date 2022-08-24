import { useState } from "react";
import useEventListener from "./useEventListener";

export default function useOnlineStatus() {
  const [state, setState] = useState(navigator.onLine);

  useEventListener("online", () => setState(navigator.onLine));
  useEventListener("offline", () => setState(navigator.onLine));

  return state;
}
