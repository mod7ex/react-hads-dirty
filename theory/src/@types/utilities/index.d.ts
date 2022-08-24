type IndexeOf<T extends readonly unknown[], S extends number[] = []> = T["length"] extends S["length"] ? S[number] : IndexeOf<T, [S["length"], ...S]>;

type TEmpty = undefined | null;

type ValueOrGenerator<T> = T extends Function ? never : T | (() => T);

// ************************************************************************************************************************************************ For translation
// https://stackoverflow.com/a/58436959/13278193

type DotPrefix<T extends string | number> = T extends "" ? "" : `.${T}`;

type StringTreePaths<T> = (T extends object ? { [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<StringTreePaths<T[K]>>}` }[Exclude<keyof T, symbol>] : "") extends infer D ? Extract<D, string> : never;

// ---------------------------------------------------------------------------------------

type Cons<H, T> = T extends readonly any[] ? (((h: H, ...t: T) => void) extends (...r: infer R) => void ? R : never) : never;

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...0[]];

type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]-?: [K] | (Paths<T[K], Prev[D]> extends infer P ? (P extends [] ? never : Cons<K, P>) : never);
    }[keyof T]
  : [];

type Leaves<T, D extends number = 10> = [D] extends [never] ? never : T extends object ? { [K in keyof T]-?: Cons<K, Leaves<T[K], Prev[D]>> }[keyof T] : [];

// ************************************************************************************************************************************************
// https://stackoverflow.com/a/73461680/13278193

type LessThan<N, A extends number[] = []> = N extends A["length"] ? A[number] : LessThan<N, [A["length"], ...A]>;

type Max<N> = Exclude<N, LessThan<N>>;

type Depth<T, A extends any[] = []> = T extends object ? (T extends readonly any[] ? Max<0 | Depth<T[number], [any, ...A]>> : Max<0 | { [K in keyof T]: Depth<T[K], [any, ...A]> }[keyof T]>) : A["length"];

// ************************************************************************************************************************************************

type ObjectOfNested<T, Key = string> = { [K in Key]?: T | ObjectOfNested<T> };

type PrimitiveObject = ObjectOfNested<PrimitiveType>;
// type PrimitiveObject = { [K in string | number | symbol]: PrimitiveType | PrimitiveObject };

// ************************************************************************************************************************************************

type SetFallback<T, F = string> = T extends object ? { [K in keyof T | "_"]: undefined extends T[K] ? F : SetFallback<T[K], F> } : T;
