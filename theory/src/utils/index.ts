export const debounce = function <T extends (...args: any[]) => any, Ctx>(fn: T, d = 1500) {
  let timer: NodeJS.Timeout;

  return function (this: Ctx, ...args: Parameters<T>) {
    const ctx = this;

    // const args = arguments;

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(ctx, args);
    }, d);
  };
};

/*

let goo = debounce(function (x: `${string}-${string}-${number}`) {
  return `${x}-go`;
});

goo("ar-bg-6");

*/

export interface COOKIE_OPTIONS {
  days: number;
  path: string;
  expires: string;
}

export const Cookies = {
  set(name: string, value: string, options: Partial<COOKIE_OPTIONS> = { path: "/", expires: "Session" }) {
    let { days, path, expires } = options;
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = date.toUTCString();
    }
    document.cookie = `${name}=${value}; expires=${expires}; path=${path}`;
  },

  get(name: string) {
    let nameEQ = name + "=";
    let ca = document.cookie.split("; ");

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      // while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }

    return null;
  },

  erase(name: string) {
    document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  },
};
