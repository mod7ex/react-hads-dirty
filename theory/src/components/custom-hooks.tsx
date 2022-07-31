import useLocalStorage from "../hooks/useLocalStorage";
import useUpdateLogger from "../hooks/useUpdateLogger";

export default function CustomHooks_0() {
  const [name, setName] = useLocalStorage<string>("my_name", "Mourad EL CADI");

  useUpdateLogger(name); // logging <name> variable changes

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <h1>{name}</h1>
    </>
  );
}
