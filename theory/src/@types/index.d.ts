declare global {
  interface Window {
    $: (x: any) => any;
  }

  type PrimitiveType = string | number | boolean | symbol | undefined | null | bigint;

  type TEmpty = undefined | null;

  type Func = (...args: any[]) => any;
}

export {};
