import { NavLink, type NavLinkProps } from "react-router-dom";
import { payloadToStringPath } from "./helpers";

export interface Props<N extends PossibleRouteNames> extends Omit<NavLinkProps, "to"> {
  to: string | ({ name: N; query?: Record<string, string | number> } & (Params<N> extends never ? unknown : { params: Record<Params<N>, string | number> }));
}

export const AppNavLink = <N extends PossibleRouteNames>(props: Props<N>) => {
  const to = payloadToStringPath(props.to);

  const _props = { ...props, to };

  return <NavLink {..._props} />;
};
