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

        <Link to="/books/new">New Book</Link>
        <br />
        <Link to="/books/1">Book 1</Link>
        <br />
        <Link to="/books/2">Book 2</Link>
        <br />
        <Link to={`/books/${payload}`}>Book - {value}</Link>
      </header>
      <Outlet context={Ctx} />

      <input type="number" min={3} value={value} onChange={(e) => setPayload({ item: e.target.value })} />
    </>
  );
}
