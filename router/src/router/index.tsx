import React from "react";
import { NavLink, type NavLinkProps } from "react-router-dom";
import { trimChar } from "../utils";
import { default as routes, IRouteStructures, IRouteStructure, TRoutes, TRoute } from "./routes";

type RouteNames<T extends IRouteStructures> = T[number]["name"] | (T[number] extends infer U ? (U extends { readonly children: infer C extends readonly any[] } ? RouteNames<C> & string : never) : never);

// @ts-ignore
type PossibleRouteNames = RouteNames<TRoutes>;

type RouteByName<T extends IRouteStructures, N extends PossibleRouteNames, I extends number[] = []> = I["length"] extends T["length"]
  ? never
  : T[I["length"]]["name"] extends N
  ? T[I["length"]]
  : RouteByName<T, N, [...I, I["length"]]> | (T[I["length"]] extends infer U ? (U extends { readonly children: infer C extends readonly any[] } ? RouteByName<C, N> : never) : never);

// Fix: params is the sum of params of element and ancestor's params
// @ts-ignore
type Params<N extends PossibleRouteNames, R = RouteByName<TRoutes, N>> = R extends { readonly params: infer C extends readonly string[] } ? (C["length"] extends 0 ? never : Record<C[number], string | number>) : never;
// @ts-ignore
type Query<N extends PossibleRouteNames, R = RouteByName<TRoutes, N>> = R extends { readonly query: infer C extends string[] } ? (C["length"] extends 0 ? never : Record<C[number], string | number>) : never;

interface Props<N extends PossibleRouteNames> extends Omit<NavLinkProps, "to"> {
  to: { name: N } & (Params<N> extends never ? unknown : { params: Params<N> }) & (Query<N> extends never ? unknown : { query: Query<N> });
}

export const getRouteByName = <N extends PossibleRouteNames>(name: N, the_routes?: IRouteStructures): number[] | void => {
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

export const getNestedIndexesNames = (arr: IRouteStructures | undefined, indexes: number[]): string[] => {
  let _indexes = [...indexes];

  if (_indexes.length && arr) {
    let i = _indexes.shift()!;
    const _route = arr[i] as IRouteStructure;
    const _path = _route.path;

    return [_path, ...getNestedIndexesNames(_route.children, _indexes)];
  }

  return [];
};

export const getPathByIndexes = (arr: IRouteStructures | undefined, indexes: number[]): string => {
  let _indexes = [...indexes];

  if (_indexes.length && arr) {
    let i = _indexes.shift()!;
    const _route = arr[i] as IRouteStructure;
    const _path = _route.path;

    return `${trimChar(_path, "/")}/${trimChar(getPathByIndexes(_route.children, _indexes), "/")}/${(_params ?? []).join("/")}`;
  }

  return "";
};

export const AppNavLink = <N extends PossibleRouteNames>(props: Props<N>) => {
  const { name, params, query } = props.to;

  // @ts-ignore
  let way = getRouteByName(name, routes);

  // @ts-ignore
  let path_parts = getPathByIndexes(routes, way);

  if (params) {
    Object.entries(params).forEach(([param_name, param_value]) => {
      path_parts.replace(`:${param_name}`);
    });
  }

  // let path = `${path_parts}/${params.}`;

  // if(way) {
  //   let i = way.shift();
  //   if(i) {
  //     path += routes[i].name
  //     while(way.length) {
  //        =
  //     }
  //   }
  // }

  console.log(way);
  console.log(path_parts);

  const _props = { ...props, to: "" };

  return <NavLink {..._props} />;
};
