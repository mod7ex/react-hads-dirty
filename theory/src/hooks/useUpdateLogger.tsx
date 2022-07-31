import { useEffect } from "react";

export default function useUpdateLogger<T extends string>(value: T) {
  useEffect(() => {
    console.log("¤¤¤ value changed: ", value);
  }, [value]);
}
