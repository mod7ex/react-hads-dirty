import { useEffect, useRef, EffectCallback } from "react";
import { isEqual } from "lodash";

export default function useDeepCompareEffect<T>(cb: EffectCallback, dependencies: T[] = []) {
  const currentDependenciesRef = useRef<T[]>();

  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies;
  }

  useEffect(cb, [currentDependenciesRef.current]);
}
