import _router from "../";

const useRouteResolvers = () => {
  return [_router.to, _router.to_template] as const;
};

export default useRouteResolvers;
