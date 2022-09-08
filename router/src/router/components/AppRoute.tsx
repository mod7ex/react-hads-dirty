import { Route, type RouteProps } from "react-router-dom";
import { payloadToStringPath } from "../helpers";

export interface Props<N extends PossibleRouteNames> extends Omit<RouteProps, "to"> {
  to: string | ({ name: N; query?: Record<string, string | number> } & (Params<N> extends never ? unknown : { params: Record<Params<N>, string | number> }));
}

const AppLink = <N extends PossibleRouteNames>(props: Props<N>) => {
  const to = payloadToStringPath(props.to);

  const _props = { ...props, to };

  return <Route {..._props} />;
};

export default AppLink;
