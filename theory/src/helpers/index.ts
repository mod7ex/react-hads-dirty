export const isObject = (x: any): x is object => {
  if (typeof x === "object") return true;
  return false;
};
