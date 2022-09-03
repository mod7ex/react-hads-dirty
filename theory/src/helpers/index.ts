export const isObject = (x: any): x is object => typeof x === "object";

export const isFunction = (x: any): x is Func => typeof x === "function";

export const isArray = (x: any): x is unknown[] => Array.isArray(x);

// ------------------------------------------ Trampoline
type Fnc = (...args: readonly any[]) => any | Fnc;

// NOTE: pay attention with recursive functions that return functions
const trampoline =
  <T extends Fnc>(fn: T) =>
  (...args: Parameters<T>) => {
    let result = fn(...args);

    while (isFunction(result)) {
      result = result();
    }

    return result as Exclude<ReturnType<T>, Func>;
  };

/*
const sumBelow = (n: number, sum = 0): number => (n === 0 ? sum : sumBelow(n - 1, sum + n));

const sumBelowFunc = (n: number, sum = 0) => (n === 0 ? sum : () => sumBelowFunc(n - 1, sum + n));

const sumBelowRec = trampoline(sumBelowFunc);
*/

// ------------------------------------------

// export function getNestedValue<T extends object, K extends Leaves<T>>(target: T, keys: K): NestedValue<T, K>

// For translation purposes
export function getNestedValue<T extends object, R = string>(target: T, keys: string[]): R {
  // @ts-ignore
  if (keys.length === 0) return target;

  const [x, ..._keys] = keys;

  // @ts-ignore
  const _target = target[x];

  if (!isObject(_target) || _target == null) return _target;

  // @ts-ignore
  return getNestedValue(_target, _keys);
}

// Fix: bad typing
export const recursionProxy = <T extends SetFallback<ObjectOfNested<string>, "", "_">>(subject: T, fallback = "", fbKey = "_"): T =>
  new Proxy(subject, {
    get(target, key: string & keyof T) {
      const _target = target[key];

      if (isObject(_target) && _target !== null) return recursionProxy(_target, fallback);

      // _ is a default fall back for that level
      return _target ?? target[fbKey] ?? fallback;
    },
  });

export const recursionProxyWithFallbackObject = <T extends SetFallback<ObjectOfNested<string>, "", "_">, F extends SetFallback<ObjectOfNested<string>>>(subject: T, fallbackObject: F, fallback = "", fbKey = "_"): T =>
  new Proxy(subject, {
    get(target, key: string & keyof T) {
      const _target: T[keyof T] = target[key];

      const _fallbackObject = fallbackObject[key];

      if (isObject(_target) && _target !== null) {
        if (isObject(_fallbackObject) && _fallbackObject !== null) return recursionProxyWithFallbackObject(_target, _fallbackObject, fallback, fbKey);

        return recursionProxy(_target, _fallbackObject, fbKey);
      }

      // _ is a default fall back for that level
      // order may depend on app needs
      return _target ?? (isObject(_fallbackObject) ? recursionProxy(_fallbackObject, fallback, fbKey) : _fallbackObject) ?? target[fbKey] ?? fallback;
    },
  });
