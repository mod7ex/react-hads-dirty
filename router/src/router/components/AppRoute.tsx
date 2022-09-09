import { Route, type PathRouteProps, type LayoutRouteProps, type IndexRouteProps } from "react-router-dom";
import { isObject, payloadToStringTemplate } from "../helpers";

export interface Props<N extends PossibleRouteNames> extends Omit<PathRouteProps | LayoutRouteProps | IndexRouteProps, "path"> {
  path?: string | { name: N };
}

const AppRoute = <N extends PossibleRouteNames>(props: Props<N>) => {
  let path: string | undefined = "";

  if (isObject(props.path)) {
    const { name } = props.path;

    path = payloadToStringTemplate(name);
  } else {
    path = props.path;
  }

  const _props = { ...props, path };

  return <Route {..._props} />;
};

export default AppRoute;
