import React from "react";
import { NavLink, type NavLinkProps } from "react-router-dom";
import { trimChar } from "../utils";
import { default as routes, IRouteStructures, IRouteStructure, TRoutes, TRoute } from "./routes";

const isObject = (v: any): v is object => typeof v === "object";

type RouteNames<T extends IRouteStructures> = T[number]["name"] | (T[number] extends infer U ? (U extends { readonly children: infer C extends readonly any[] } ? RouteNames<C> & string : never) : never);

// @ts-ignore
type PossibleRouteNames = RouteNames<TRoutes>;

type ParamPicker<T extends `${string}`> = T extends `${string}:${infer P}/${infer R}` ? P | ParamPicker<R> : T extends `${string}:${infer P}` ? P : never;

type RoutePath<T extends IRouteStructures, N extends PossibleRouteNames, I extends number[] = []> = I["length"] extends T["length"]
  ? never
  : (T[I["length"]]["name"] extends N ? T[I["length"]]["path"] : T[I["length"]] extends infer U extends { readonly children: readonly any[] } ? `${T[I["length"]]["path"]}/${RoutePath<U["children"], N>}` : never) | RoutePath<T, N, [...I, I["length"]]>;

type Params<N extends PossibleRouteNames> = ParamPicker<RoutePath<TRoutes, N>>;

interface Props<N extends PossibleRouteNames> extends Omit<NavLinkProps, "to"> {
  to: string | ({ name: N; query?: Record<string, string | number> } & (Params<N> extends never ? unknown : { params: Record<Params<N>, string | number> }));
}

const getRouteByName = <N extends PossibleRouteNames>(name: N, the_routes?: IRouteStructures): number[] | void => {
  if (Array.isArray(the_routes)) {
    for (let i = 0; i < the_routes.length; i++) {
      let _route = the_routes[i] as IRouteStructure;

      if (_route.name === name) return [i];

      if (_route.children) {
        let _i = getRouteByName(name, _route.children);
        if (_i !== undefined) return [i, ..._i];
      }
    }
  }
};

const getPath = (arr: IRouteStructures | undefined, indexes: number[]): string => {
  let _indexes = [...indexes];

  if (_indexes.length && arr) {
    let i = _indexes.shift()!;
    const _route = arr[i] as IRouteStructure;
    const _path = _route.path;

    return `${trimChar(_path, "/")}/${getPath(_route.children, _indexes)}`;
  }

  return "";
};

const payloadToStringPath = <N extends PossibleRouteNames>(payload: Props<N>["to"]) => {
  const _to = payload;
  let to = "";

  if (isObject(_to)) {
    // @ts-ignore
    const { name, params, query } = _to;

    let way = getRouteByName(name, routes);

    if (way) {
      to = getPath(routes, way);

      if (params) {
        Object.entries(params).forEach(([param_name, param_value]) => {
          to = to.replace(`/:${param_name}/`, `/${param_value}/`);
        });
      }

      to = `/${trimChar(to, "/")}`;

      if (query) {
        let _query_string = Object.entries(query).map(([query_param_name, query_param_value]) => `${query_param_name}=${query_param_value}`);

        to += `?${_query_string.join("&")}`;
      }
    }
  } else {
    to = _to;
  }

  return to;
};

export const AppNavLink = <N extends PossibleRouteNames>(props: Props<N>) => {
  const to = payloadToStringPath(props.to);

  const _props = { ...props, to };

  return <NavLink {..._props} />;
};