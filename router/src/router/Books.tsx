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
          <Route path={window.$path("Book")} element={<Book />} />
          <Route path={window.$path("NewBook")} element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
}
