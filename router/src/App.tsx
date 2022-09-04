import { lazy, Suspense } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import BooksRoute from "./router/Books";
import Redirect from "./pages/Redirect";
// import About from "./pages/About";

const LazyAbout = lazy(() => import(/* webpackChunkName: 'about_page' */ "./pages/About"));

const SuspenseLazyAbout = () => (
  <Suspense fallback={<h2>loading ...</h2>}>
    <LazyAbout />
  </Suspense>
);

function App() {
  return (
    <div>
      <h1>Welcome to React Router!</h1>

      {/* <Routes location="/books"> */}
      <Routes>
        <Route path="/books" element={<h2>Extra content</h2>} />
      </Routes>

      <nav>
        <ul>
          <li>
            <Link to="/" reloadDocument>
              home
            </Link>
          </li>
          <li>
            <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "blue" })} to="/books">
              {({ isActive }) => (isActive ? "You are in Books page" : "Books")}
            </NavLink>
          </li>
          <li>
            <Link to="/about" state={{ message: "hi" }}>
              about (some state)
            </Link>
          </li>
          <li>
            <Link to="/not-allowed-so-redirect-to-home">not-allowed</Link>
          </li>
          <li>
            <Link to="/somerandom">no page</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/books/*" element={<BooksRoute />} />

        {/*
            <Route path="/books" element={<BooksLayout />}>
              <Route index element={<Books />} />
              <Route path=":id" element={<Book />} />
              <Route path="new" element={<NewBook />} />
            </Route>
        */}

        <Route path="/about" element={<SuspenseLazyAbout />} />
        <Route path="/not-allowed-so-redirect-to-home" element={<Redirect />} />
        <Route path="/*" element={<h1>404 Not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
