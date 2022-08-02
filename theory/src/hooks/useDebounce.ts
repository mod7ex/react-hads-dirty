import { useEffect } from "react";
import useTimeout from "./useTimeout";

export default function useDebounce(cb: Function, delay: number, dependencies: any[]) {
  const { clear, reset } = useTimeout(cb, delay);

  useEffect(reset, [...dependencies, reset]);

  useEffect(clear, [clear]);
}
