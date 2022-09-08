import { IRouteStructures, TRoutes } from "../routes";

declare global {
    type RouteNames<T extends IRouteStructures> =
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

    type ParamPicker<T extends `${string}`> = T extends `${string}:${infer P}/${infer R}`
        ? P | ParamPicker<R>
        : T extends `${string}:${infer P}`
        ? P
        : never;

    type RoutePath<T extends IRouteStructures, N extends PossibleRouteNames, I extends number[] = []> = I["length"] extends T["length"]
    ? never
    : (
            T[I["length"]]["name"] extends N
            ? T[I["length"]]["path"]
            : T[I["length"]] extends infer U extends { readonly children: readonly any[] }
            ? `${T[I["length"]]["path"]}/${RoutePath<U["children"], N>}`
            : never
        ) | RoutePath<T, N, [...I, I["length"]]>;

    type Params<N extends PossibleRouteNames> = ParamPicker<RoutePath<TRoutes, N>>;
}
