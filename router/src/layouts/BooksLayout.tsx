import { Link, Outlet, useSearchParams } from "react-router-dom";

const Ctx = { message: "Hello from layout" };

export type CTX = typeof Ctx;

export default function BooksLayout() {
  const [payload, setPayload] = useSearchParams({ item: "3" });

  const value = payload.get("item") ?? "";

  return (
    <>
      <header>
        <h2>Books</h2>
        <Link to={window.$to({ name: "NewBook" })}>New Book</Link>
        <br />
        <Link to={window.$to({ name: "Book", params: { id: 1 } })}>Book 1</Link>
        <br />
        <Link to={window.$to({ name: "Book", params: { id: 2 } })}>Book 2</Link>
        <br />
        <Link to={window.$to({ name: "Book", params: { id: value } })}>Book - {value}</Link>
      </header>

      <Outlet context={Ctx} />

      <input type="number" min={3} value={value} onChange={(e) => setPayload({ item: e.target.value })} />
    </>
  );
}
