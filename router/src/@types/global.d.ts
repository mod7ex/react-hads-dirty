import type { PathResolver, TemplateResolver, RoutePathResolver } from "../router";

declare global {
  interface Window {
    $to: PathResolver;
    $to_template: TemplateResolver;
    $path: RoutePathResolver;
  }

  type TrimChar<T extends string, C extends string> = T extends `${C}${infer M}`
    ? TrimChar<M, C>
    : T extends `${infer M}${C}`
    ? TrimChar<M, C>
    : T extends `${C}`
    ? ''
    : T ;
}
