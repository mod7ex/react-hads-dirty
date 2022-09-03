// ************************************************************************************************************************************************ For translation
// https://stackoverflow.com/a/58436959/13278193

type DotPrefix<T extends string | number> = T extends "" ? "" : `.${T}`;

type StringTreePaths<T> = (T extends object ? { [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<StringTreePaths<T[K]>>}` }[Exclude<keyof T, symbol>] : "") extends infer D ? Extract<D, string> : never;

// ---------------------------------------------------------------------------------------

type ArrayGen<T = 10, L extends number[] = []> = L["length"] extends T ? L : ArrayGen<T, [...L, L["length"]]>;

// ---------------------------------------------------------------------------------------
// type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...0[]];
type Prev = [...ArrayGen<21, [never]>, ...0[]];

// works like a push but from the beginning
type Shift<H, T> = T extends readonly unknown[] ? (((h: H, ...t: T) => void) extends (...r: infer R) => void ? R : never) : never;

type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]-?: [K] | (Paths<T[K], Prev[D]> extends infer P ? (P extends [] ? never : Shift<K, P>) : never);
    }[keyof T]
  : [];

type Leaves<T, D extends number = 10> = [D] extends [never] ? never : T extends object ? { [K in keyof T]-?: Shift<K, Leaves<T[K], Prev[D]>> }[keyof T] : [];

type NestedValue<T extends object, Keys = Leaves<T>> = Keys extends [infer O] ? (O extends keyof T ? T[O] : never) : Keys extends [infer F, ...infer R] ? (F extends keyof T ? (T[F] extends object ? NestedValue<T[F], R> : T[F]) : never) : T;

// ************************************************************************************************************************************************ Depth
// https://stackoverflow.com/a/73461680/13278193

type LessThan<N, A extends number[] = []> = N extends A["length"] ? A[number] : LessThan<N, [A["length"], ...A]>;

type Max<N> = Exclude<N, LessThan<N>>;

type Depth<T, A extends any[] = []> = T extends object ? (T extends readonly any[] ? Max<0 | Depth<T[number], [any, ...A]>> : Max<0 | { [K in keyof T]: Depth<T[K], [any, ...A]> }[keyof T]>) : A["length"];

// ************************************************************************************************************************************************

type IndexeOf<T extends readonly unknown[], S extends number[] = []> = T["length"] extends S["length"] ? S[number] : IndexeOf<T, [S["length"], ...S]>;

type ValueOrGenerator<T> = T extends Function ? never : T | (() => T);

type ObjectOfNested<T, Key = string> = { [K in Key]?: T | ObjectOfNested<T> };

type SetFallback<T, F = string, Key = "_"> = T extends object ? { [K in keyof T | Key]: K extends Key ? F : SetFallback<T[K], F> } : T;
