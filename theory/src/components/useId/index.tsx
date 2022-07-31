import EmailForm from "./email-form";

function UseId() {
  /**
   * Both email fields will have the same id
   */
  return (
    <>
      <EmailForm />
      <article style={{ marginBlock: "1rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus, ducimus minus vitae repellendus temporibus, porro voluptatibus deleniti libero nisi tempore cum sequi! Possimus quam, id asperiores dolores nemo vitae!</article>
      <EmailForm />
    </>
  );
}

export default UseId;
