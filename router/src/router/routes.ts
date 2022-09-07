export interface IRouteStructure {
  name?: string;
  path: string;
  component: any;
  meta?: object;
  children?: readonly IRouteStructure[];
  query?: string[];
}

export type IRouteStructures = readonly IRouteStructure[];

/**
 *
 * 1 - Params in array should have an order
 * 2 - child shouldn't have same Param name as his parent or ancestor
 *
 */

const routes = [
  { name: "Home", path: "/", component: () => import(/* webpackChunkName: 'home_page' */ "../pages/Home") },

  { name: "About", path: "/about", component: () => import(/* webpackChunkName: 'about_page' */ "../pages/About") },

  {
    name: "Books",
    path: "/books",
    component: import(/* webpackChunkName: 'books_page' */ "../pages/Books"),
    children: [
      { name: "Book", path: "", component: import(/* webpackChunkName: 'book_page' */ "../pages/Book"), params: ["id"] },
      { name: "NewBook", path: "new", component: import(/* webpackChunkName: 'new_book_page' */ "../pages/NewBook") },
    ],
  },
] as const;

export type TRoutes = typeof routes;
export type TRoute = TRoutes[number];

export default routes;
