import { useEffect, useRef } from "react";
import useRenderCount from "./useRenderCount";

export default function useDebugInfo<T>(component_name: string, props: T, sec = true) {
  const count = useRenderCount();

  const changedProps = useRef<Partial<T>>({});
  const previousProps = useRef(props);
  const lastRenderTimeStamp = useRef(Date.now());

  const propKeys = Object.keys({ ...props, ...previousProps }) as (keyof T)[];

  changedProps.current = propKeys.reduce((obj, key) => {
    if (props[key] === previousProps.current[key]) return obj;
    return {
      ...obj,
      [key]: { previous: previousProps.current[key], current: props[key] },
    };
  }, {});

  const info = {
    count,
    changedProps: changedProps.current,
    timeSinceLastRender: Date.now() - lastRenderTimeStamp.current,
    lastRenderTimeStamp: lastRenderTimeStamp.current,
  };

  useEffect(() => {
    previousProps.current = props;
    lastRenderTimeStamp.current = Date.now();
    console.log("[debug-info] :", component_name, info);
  });

  return info;
}
