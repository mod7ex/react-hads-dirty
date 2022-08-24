declare global {
  interface Window {
    $: (x: any) => any;
  }

  type PrimitiveType = string | number | boolean | symbol;
}

export {};
