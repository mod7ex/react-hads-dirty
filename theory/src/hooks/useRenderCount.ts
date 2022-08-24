import { useEffect, useRef } from "react";

export default function useRenderCount() {
  let count = useRef<number>(1);

  useEffect(() => {
    count.current++;
  });

  return count.current;
}
