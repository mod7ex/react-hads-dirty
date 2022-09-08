import { Link, type LinkProps } from "react-router-dom";
import { payloadToStringPath } from "../helpers";

export interface Props<N extends PossibleRouteNames> extends Omit<LinkProps, "to"> {
  to: string | ({ name: N; query?: Record<string, string | number> } & (Params<N> extends never ? unknown : { params: Record<Params<N>, string | number> }));
}

const AppLink = <N extends PossibleRouteNames>(props: Props<N>) => {
  const to = payloadToStringPath(props.to);

  const _props = { ...props, to };

  return <Link {..._props} />;
};

export default AppLink;
