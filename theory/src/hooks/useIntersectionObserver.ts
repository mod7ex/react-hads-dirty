import { MutableRefObject, useState, useEffect } from "react";

export default function useIntersectionObserver(ref: MutableRefObject<HTMLElement | undefined>, rootMargin: `${number}px` = "0px", root: MutableRefObject<HTMLElement | undefined>) {
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;

    console.log(el);

    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => setState(entry.isIntersecting), { rootMargin, root: root.current });

    observer.observe(el);

    return () => {
      if (!el) return;
      observer.unobserve(el);
    };
  }, [ref, rootMargin, root]);

  return state;
}
