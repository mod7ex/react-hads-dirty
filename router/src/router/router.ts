export interface IRoute {
  name?: string;
  path: string;
  component: any;
  meta?: object;
  children?: readonly IRoute[];
}

export type IRoutes = readonly IRoute[];

/**
 *
 * Route shouldn't have same param name as his ancestor
 * route name is unique
 *
 */

const routes = [
  { name: "Home", path: "/", component: () => import(/* webpackChunkName: 'home_page' */ "../pages/Home") },

  { name: "About", path: "/about/", component: () => import(/* webpackChunkName: 'about_page' */ "../pages/About") },

  {
    name: "Books",
    path: "/books/",
    component: import(/* webpackChunkName: 'books_page' */ "../pages/Books"),
    children: [
      { name: "Book", path: "/:id", component: import(/* webpackChunkName: 'book_page' */ "../pages/Book") },
      { name: "NewBook", path: "new", component: import(/* webpackChunkName: 'new_book_page' */ "../pages/NewBook") },
    ],
  },
] as const;

export type TRoutes = typeof routes;
export type TRoute = TRoutes[number];

export default routes;
