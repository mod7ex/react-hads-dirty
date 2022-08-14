import { useEffect, useRef } from "react";

type EventType = keyof WindowEventMap;

type Listener<K extends EventType> = (this: Window, ev: WindowEventMap[K]) => any;

export default function useEventListener<K extends EventType>(type: K, listener: Listener<K>, element: Window | HTMLElement = window) {
  const cb = useRef(listener.bind(window));

  useEffect(() => {
    cb.current = listener.bind(window);
  }, [listener]);

  useEffect(() => {
    const handler = ((e: WindowEventMap[K]) => cb.current(e)) as EventListenerOrEventListenerObject;

    element.addEventListener(type, handler);

    return () => element.removeEventListener(type, handler);
  }, [type, element]);
}
