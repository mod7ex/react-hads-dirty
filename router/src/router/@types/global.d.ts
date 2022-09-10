import { IRoutes, TRoutes } from "../router";

// Fix make a trimChar-like type in order not to have some double '//

declare global {

    type RouteNames<T extends IRoutes> =
        T[number]["name"]
        | (
            T[number] extends infer U
                ? (
                    U extends { readonly children: infer C extends readonly any[] }
                    ? RouteNames<C> & string
                    : never
                )
                : never
        );

    type PossibleRouteNames = RouteNames<TRoutes>;

    type RoutePath<T extends IRoutes, N extends PossibleRouteNames, I extends number[] = []> = I["length"] extends T["length"]
        ? never
        : (
                T[I["length"]]["name"] extends N
                ? TrimChar<T[I["length"]]["path"], '/'>
                : T[I["length"]] extends infer U extends { readonly children: readonly any[] }
                ? RoutePath<U["children"], N>
                : never
            ) | RoutePath<T, N, [...I, I["length"]]>;

    type ParamPicker<T extends `${string}`> = T extends `${string}:${infer P}/${infer R}`
        ? P | ParamPicker<R>
        : T extends `${string}:${infer P}`
        ? P
        : never;

    type FullRoutePath<T extends IRoutes, N extends PossibleRouteNames, I extends number[] = []> = I["length"] extends T["length"]
        ? never
        : (
                T[I["length"]]["name"] extends N
                ? T[I["length"]]["path"]
                : T[I["length"]] extends infer U extends { readonly children: readonly any[] }
                ? `/${TrimChar<T[I["length"]]["path"], '/'>}/${TrimChar<FullRoutePath<U["children"], N>, '/'>}`
                : never
            ) | FullRoutePath<T, N, [...I, I["length"]]>;

    type Params<N extends PossibleRouteNames> = ParamPicker<FullRoutePath<TRoutes, N>>;

    type To<N extends PossibleRouteNames> = string | ({ name: N; query?: Record<string, string | number> } & (Params<N> extends never ? unknown : { params: Record<Params<N>, string | number> }));
}