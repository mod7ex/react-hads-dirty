import { useEffect, useState } from "react";

export default function List({ getItems }: { getItems: (inc?: number) => number[] }) {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    console.log("Updating items");
    setItems(getItems());
  }, [getItems]);

  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}
