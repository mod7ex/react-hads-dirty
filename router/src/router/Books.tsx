import { Route, Routes } from "react-router-dom";
import Books from "../pages/Books";
import Book from "../pages/Book";
import NewBook from "../pages/NewBook";
import BooksLayout from "../layouts/BooksLayout";

export default function BooksRoute() {
  return (
    <>
      <Routes>
        <Route element={<BooksLayout />}>
          <Route index element={<Books />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
}
