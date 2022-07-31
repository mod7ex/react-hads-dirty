import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export default function UseDebugValue() {
  const [firstName, setFirstName] = useLocalStorage("firstName", "Mourad");
  const [lastName, setLastName] = useState("EL CADI");

  return (
    <>
      First: <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <br />
      Last: <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
    </>
  );
}
