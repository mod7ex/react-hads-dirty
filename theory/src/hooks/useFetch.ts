import useAsync from "./useAsync";

const DEFAULT_OPTIONS: RequestInit = { headers: { "Content-Type": "application/json" } };

// Web dev simplified
export default function useFetch<T>(url: string, options: RequestInit = {}, dependencies: any[] = []) {
  return useAsync<T>(() => {
    return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then((res) => {
      console.log(res);
      if (res.ok) return res.json() as Promise<T>;
      return res.json().then((json) => Promise.reject(json));
    });
  }, dependencies);
}
