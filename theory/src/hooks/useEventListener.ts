/*

import { useEffect, useRef } from "react";

type EventType = keyof WindowEventMap;

type Target = Window | HTMLElement | MediaQueryList | (Window & typeof globalThis);

type Listener<T extends Target, K extends EventType> = (this: T, ev: WindowEventMap[K]) => any;

export default function useEventListener<T extends Target, K extends EventType>(type: K, listener: Listener<T, K>, element: T = window as T, options?: boolean | AddEventListenerOptions) {
  const cb = useRef(listener);

  useEffect(() => {
    cb.current = listener;
  }, [listener]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const handler = ((e: WindowEventMap[K]) => cb.current(e)) as EventListenerOrEventListenerObject;

    element.addEventListener(type, handler, options);

    return () => element.removeEventListener(type, handler);
  }, [type, element, options]);
}

*/

// *************************************************************************************************

import { RefObject, useEffect, useRef } from "react";

// See: https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

// Window Event based useEventListener interface
function useEventListener<K extends keyof WindowEventMap>(eventName: K, handler: (event: WindowEventMap[K]) => void, element?: undefined, options?: boolean | AddEventListenerOptions): void;

// Element Event based useEventListener interface
function useEventListener<K extends keyof HTMLElementEventMap, T extends HTMLElement = HTMLDivElement>(eventName: K, handler: (event: HTMLElementEventMap[K]) => void, element: RefObject<T>, options?: boolean | AddEventListenerOptions): void;

// Document Event based useEventListener interface
function useEventListener<K extends keyof DocumentEventMap>(eventName: K, handler: (event: DocumentEventMap[K]) => void, element: RefObject<Document>, options?: boolean | AddEventListenerOptions): void;

function useEventListener<KW extends keyof WindowEventMap, KH extends keyof HTMLElementEventMap, T extends HTMLElement | void = void>(
  eventName: KW | KH,
  handler: (event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event) => void,
  element?: RefObject<T>,
  options?: boolean | AddEventListenerOptions
) {
  // Create a ref that stores handler
  const savedHandler = useRef(handler);

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Define the listening target
    const targetElement: T | Window = element?.current || window;

    if (!(targetElement && targetElement.addEventListener)) return;

    // Create event listener that calls handler function stored in ref
    const eventListener: typeof handler = (event) => savedHandler.current(event);

    targetElement.addEventListener(eventName, eventListener, options);

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, options]);
}

export default useEventListener;
