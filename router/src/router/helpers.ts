import { trimChar } from "../utils";
import { default as routes, IRouteStructures, IRouteStructure } from "./routes";

/**
 * We adopt this approach in case of an incorrect route name ...
 * the output will be '/' Home, we could have change the output
 * depending on our needs
 */

export const isObject = (v: any): v is object => typeof v === "object";

export const routePathIndexes = <N extends PossibleRouteNames>(name: N, the_routes?: IRouteStructures): number[] | void => {
  if (Array.isArray(the_routes)) {
    for (let i = 0; i < the_routes.length; i++) {
      let _route = the_routes[i] as IRouteStructure;

      if (_route.name === name) return [i];

      if (_route.children) {
        let _i = routePathIndexes(name, _route.children);
        if (_i !== undefined) return [i, ..._i];
      }
    }
  }
};

export const getPath = (arr: IRouteStructures | undefined, indexes: number[]): string => {
  let _indexes = [...indexes];

  if (_indexes.length && arr) {
    let i = _indexes.shift()!;
    const _route = arr[i] as IRouteStructure;
    const _path = _route.path;

    return `${trimChar(_path, "/")}/${getPath(_route.children, _indexes)}`;
  }

  return "";
};

export const payloadToStringTemplate = <N extends PossibleRouteNames>(name: N) => {
  let to = "";

  let way = routePathIndexes(name, routes);

  if (way) {
    to = getPath(routes, way);

    to = `/${trimChar(to, "/")}`;
  }

  return to;
};

export const payloadToStringPath = <N extends PossibleRouteNames>(payload: To<N>) => {
  let to = "";

  if (isObject(payload)) {
    // @ts-ignore
    const { name, params, query } = payload;

    to = payloadToStringTemplate(name);

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
