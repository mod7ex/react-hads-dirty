import { useId } from "react";

export default function EmailForm() {
  const id = useId(); // one id is enough for a component, from it we can go further and generate new Ids

  return (
    <>
      <label htmlFor={id}>Email</label>
      <input type="email" id={id} />

      <label htmlFor={`name-${id}`}>Name</label>
      <input type="text" id={`name-${id}`} />
    </>
  );
}
