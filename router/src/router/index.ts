import { default as routes, IRoutes, IRoute, TRoutes } from "./router";

/**
 * We adopt this approach in case of an incorrect route name ...
 * the output will be '/' Home, we could have change the output
 * depending on our needs
 */

export const isObject = (v: any): v is object => typeof v === "object";

export const trimChar = <T extends string>(payload: string, char: T) => {
  if (payload.endsWith(char)) {
    payload = payload.substring(0, payload.length - 1);
  }

  if (payload.startsWith(char)) {
    payload = payload.substring(1, payload.length);
  }

  return payload;
};

export const routeIndexes = <N extends PossibleRouteNames>(name: N, the_routes?: IRoutes): number[] | void => {
  if (Array.isArray(the_routes)) {
    for (let i = 0; i < the_routes.length; i++) {
      let _route = the_routes[i] as IRoute;

      if (_route.name === name) return [i];

      if (_route.children) {
        let _i = routeIndexes(name, _route.children);
        if (_i !== undefined) return [i, ..._i];
      }
    }
  }
};

export const getPath = (arr: IRoutes | undefined, indexes: number[]): string => {
  let _indexes = [...indexes];

  if (_indexes.length && arr) {
    let i = _indexes.shift()!;
    const _route = arr[i] as IRoute;
    const _path = _route.path;

    return `${trimChar(_path, "/")}/${getPath(_route.children, _indexes)}`;
  }

  return "";
};

type LRoutePath<N extends PossibleRouteNames, B extends boolean> = B extends true ? `${FullRoutePath<TRoutes, N>}/*` : FullRoutePath<TRoutes, N>;

const resolveTemplate = <N extends PossibleRouteNames, B extends boolean>(name: N, catch_all?: B): LRoutePath<N, B> => {
  let to = "";

  let way = routeIndexes(name, routes);

  if (way) {
    to = `/${trimChar(getPath(routes, way), "/")}`;
  }

  // @ts-ignore
  return catch_all ? `${to}/*` : to;
};

const resolvePath = <N extends PossibleRouteNames>(payload: To<N>) => {
  let to = "";

  if (isObject(payload)) {
    // @ts-ignore
    const { name, params, query } = payload;

    to = resolveTemplate(name);

    if (params) {
      Object.entries(params).forEach(([param_name, param_value]) => {
        // Possible Fix
        to = to.replace(`/:${param_name}`, `/${param_value}`);
      });
    }

    to = `/${trimChar(to, "/")}`;

    if (query) {
      let _query_string = Object.entries(query).map(([query_param_name, query_param_value]) => `${query_param_name}=${query_param_value}`);

      to += `?${_query_string.join("&")}`;
    }
  } else {
    to = payload;
  }

  return to;
};

export const routePath = <N extends PossibleRouteNames>(name: N, the_routes?: IRoutes): string | void => {
  if (Array.isArray(the_routes)) {
    for (let i = 0; i < the_routes.length; i++) {
      let _route = the_routes[i] as IRoute;

      if (_route.name === name) return `${trimChar(_route.path, "/")}`;

      if (_route.children) {
        let _path = routePath(name, _route.children);
        if (_path !== undefined) return _path;
      }
    }
  }
};

export type PathResolver = typeof resolvePath;

export type TemplateResolver = typeof resolveTemplate;

export type RoutePathResolver = <N extends PossibleRouteNames>(name: N) => RoutePath<TRoutes, N>;

const _to = {
  to: resolvePath,
  to_template: resolveTemplate,
  path: <N extends PossibleRouteNames>(name: N) => routePath(name, routes) as RoutePath<TRoutes, N>,
};

export default _to;
