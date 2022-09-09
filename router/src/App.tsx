import { lazy, Suspense } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import BooksRoute from "./router/Books";
import Redirect from "./pages/Redirect";
import AppNavLink from "./router/components/AppNavLink";
import AppLink from "./router/components/AppLink";
import AppRoute from "./router/components/AppRoute";
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
        {/* https://stackoverflow.com/a/69869761/13278193 */}
        <Route element={<AppRoute path={{ name: "Books" }} element={<h3>Some content</h3>} />} />
      </Routes>

      <nav>
        <ul>
          <li>
            <Link to="/" reloadDocument>
              home
            </Link>
          </li>
          <li>
            {/* <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "blue" })} to="/books">
              {({ isActive }) => (isActive ? "You are in Books page" : "Books")}
            </NavLink> */}

            <AppNavLink style={({ isActive }) => ({ color: isActive ? "red" : "blue" })} to={{ name: "Book", params: { id: 3 }, query: { order: "name" } }}>
              {({ isActive }) => (isActive ? "You are in Books page" : "Books")}
            </AppNavLink>
          </li>
          <li>
            {/* <Link to="/about" state={{ message: "hi" }}>
              about (some state)
            </Link> */}

            <AppLink to={{ name: "About" }} state={{ message: "hi" }}>
              about (some state)
            </AppLink>
          </li>
          <li>
            <AppLink to="/not-allowed-so-redirect-to-home">not-allowed</AppLink>
          </li>
          <li>
            <AppLink to="/somerandom">no page</AppLink>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route element={<AppRoute path={{ name: "Home" }} element={<Home />} />} />

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
