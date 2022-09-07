export const trimChar = <T extends string>(payload: `${T | ""}${string}${T | ""}`, char: T) => {
  if (payload.endsWith(char)) {
    payload = payload.substring(0, payload.length - 1);
  }

  if (payload.startsWith(char)) {
    payload = payload.substring(1, payload.length);
  }

  return payload;
};
